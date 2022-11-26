import db from '../database'
// db storage logic
class dbModel {
    async getTaskById(taskId:string) : Promise<ProductEntity|null> {
        const taskRes = await db.collection('tasks').doc(taskId).get();
        if(!taskRes.exists){
            return null;
        }
        return Object.assign(ProductEntity.empty(), taskRes.data()!);
    }
    
    async createTaskById(storeOwnerUid: string, name: string, price: number, stockQuantity:number, internalCode:string) : Promise<ProductEntity>{
        const productsCollection = db.collection('products');
        const nextId = (await productsCollection.get()).size + 1 + '';
        const ref = productsCollection.doc(nextId);
        const data = new ProductEntity(storeOwnerUid, nextId, name, price, stockQuantity, internalCode, Timestamp.now());
        await ref.set(serializeFS(data));
        return data;
    }
    
    async getTasks() : Promise<ProductEntity[]> {
        const snapshot = await db.collection('tasks').get();
        return snapshot.docs.map((doc) => Object.assign(ProductEntity.empty(), doc.data()));
    }
}

export default dbModel;

