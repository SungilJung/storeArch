
    
import { GetKeywordsPort } from "../../../../src/application/search/application/port/out/getKeywordsPort";
import GetRecentKeywordsService from "../../../../src/application/search/application/service/getRecentKeywordsService";
import { Keyword } from "../../../../src/application/search/domain/keyword";

describe('getRecentKeywordsQuery', () => {
    var datas = [
        {value: '콜라'},
        {value: '사이다'},
        {value: '맥주1'},
        {value: '맥주2'},
        {value: '맥주3'},
        {value: '맥주4'},
        {value: '맥주5'},
        {value: '맥주6'},
        {value: '맥주7'},
        {value: '맥주9'},
        {value: '맥주10'},
        {value: '맥주11'},
        {value: '맥주12'},
    ]

    it('get recent keywords', async () => {
        
        const MockKeywordPersistanceAdapter:GetKeywordsPort = (key: string): Promise<string> => {                
            return new Promise((resolve) => {
                resolve(JSON.stringify(datas));
            });
        };

        let result = await GetRecentKeywordsService('key', MockKeywordPersistanceAdapter);
        let expected:Keyword[] = datas.slice(0,10);
        
        expect(result.length).toEqual(expected.length);
        expect(result).toEqual(expected);

    });
});


  