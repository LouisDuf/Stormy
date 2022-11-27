import { Injectable } from '@angular/core';
import ICalParser from 'ical-js-parser';
@Injectable({
  providedIn: 'root'
})
export class DatagetService {

  constructor() { }

  parse(iCalString) {
		try {
      const resultJson = ICalParser.toJSON(iCalString);
			return resultJson;
		} catch (e) {
			return null;
		}
	}
}
