import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { TestcardModule } from '../components/testcard/testcard.module';
import { DatagetService } from '../services/dataget.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class Tab3Page {
  // @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;


  // number = [1,2,3,4,5,6,7,8,9,10,11,12]
  // frases = ["hello", "world","import","export","beforeEach","afterEach","beforeAll","afterAll"]
  // activeCategory =0;
  
  // thumbs: SwiperOptions = {
  //   slidesPerView: 5,
  //   freeMode: true,
  //   thumbs : {  swiper: this.swiper.swiperRef  }
  // }

  
  // thumbsSwiper: any;


  // config: SwiperOptions = {
  //   slidesPerView: 1,
  // }

  // listCarte: TestcardModule[] = [{
  //   categorie: "Sports",
  //   salle: "11OPkfc",
  //   nom: "levron james",
  // },
  // {
  //   categorie: "COUSCOUS",
  //   salle: "B19",
  //   nom: "rayhan",
  // }, 
  // {
  //   categorie: "Carrote",
  //   salle: "1A11",
  //   nom: "kaaris",
  // }
  // ] 

  // selectedCategory(index){
    
  // }

  // opt ={
  //   freeMode:true,
  //   slidesPerView: 2.8,
  // }
  data =''
  calendarData = {
    title: '',
  }
  calendar = [];
  // title => summary
  // location => salle 
  constructor(
    private parseService: DatagetService,
    private http: HttpClient
  ) {
    this.geturlIcal();
  }

  
  geturlIcal() {
//     const input = document.getElementById("input") as HTMLInputElement | null;

// if (input != null) {
//   console.log(input.value); // 👉️ "Initial value"
// }
//   return input.value;

this.http.get('../assets/ADECal.ics', {responseType: 'text'}).subscribe(data => this.extractData(data), err => console.log('err', err)); //data => console.log('data', data)
// for the moment i use this cause of cors issues i'm to lazy to fix but in the api it works pretty good so i will just make a post request with the url and then with a callback function do a GET request / or simplaly use a cloud function of fire base
// this.http.get('http://edt.uca.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources=2083&nbWeeks=3&calType=ical&projectId=7', {responseType: 'text'}).subscribe(data => console.log()); //data => console.log('data', data)

// const fetch = require('node-fetch');
// fetch('http://edt.uca.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources=2083,5803&nbWeeks=3&calType=ical&projectId=7')
// .then(result => result.text())
// //the contents of the website in text format is displayed as the output on the screen
// .then(textformat => console.log(textformat))
	}

  extractData(res) {	
    const calendar = this.parseService.parse(res);
    // this.calendarData.title = calendar['summary'];
    // this.calendarData.salle = calendar['location'];

    console.log(calendar['events']);
    for(let property in calendar['events']) {
      console.log(property + " = " + calendar['events'][property]['summary']);
      // this.calendarData.title = calendar['events'][property]['summary'];
      // this.calendarData.salle = calendar['events'][property]['location'];
      // this.calendarData.title = calendar['events'][property]['summary'];
      this.calendar.push(calendar['events'][property]['summary']);
    }
    console.log(this.calendar);

    // this.calendarData.title = calendar['events'][number];
	}



  

  

}
