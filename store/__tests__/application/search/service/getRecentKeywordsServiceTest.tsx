
    
import { GetKeywordsPort } from "../../../../src/application/search/application/port/out/getKeywordsPort";
import GetRecentKeywordsService from "../../../../src/application/search/application/service/getRecentKeywordsService";

describe('getRecentKeywordsQuery', () => {
    it('get recent keywords', async () => {
        
        const MockKeywordPersistanceAdapter:GetKeywordsPort = (key: string): Promise<string> => {                
            return new Promise((resolve) => {
                resolve('data');
            });
        };

        let result = await GetRecentKeywordsService('key', MockKeywordPersistanceAdapter);
        let expected = 'data';
            
        expect(result).toEqual(expected);

    });
});


  