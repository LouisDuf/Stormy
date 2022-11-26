import { cleanEnv, str, port } from 'envalid';

function validateEnv(): void {
    cleanEnv(process.env, {
        API_KEY: str(),
        AUTH_DOMAIN: str(),
        PROJECT_ID: str(),
        STORAGE_BUCKET: str(),
        MESSAGING_SENDER_ID: str(),
        APP_ID: str(),
        MEASUREMENT_ID: str(),
        MONGO_PASSWORD: str(),
        MONGO_PATH: str(),
        MONGO_USER: str(),
        PORT: port({ default: 8080 }),
    });
}

export default validateEnv;