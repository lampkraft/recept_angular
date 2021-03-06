import { HttpHeaders } from '@angular/common/http';

export const baseServiceUrl = 'http://localhost:8080/rest/v1';
export const baseHeaderOptions = {
	headers: new HttpHeaders({
		'Access-Control-Allow-Origin': '*',
		'Authorization': 'Basic amVuczpqZW5zamVucw==' // TODO Temporary authentication solution
	})
};
export const baseServiceUrlExternal = 'http://localhost:8080/rest/external';
