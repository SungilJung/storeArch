
    
import GetRecentKeywordsService from "../../../../src/application/search/application/service/getRecentKeywordsService";

describe('getRecentKeywordsQuery', () => {
    it('get recent keywords', async () => {
        
        const loadDatas = (key: string): Promise<string> => {                
            return new Promise((resolve) => {
                resolve('data');
            });
        };

        let result = await GetRecentKeywordsService('key', loadDatas);
        let expected = 'data';
            
        expect(result).toEqual(expected);

    });
});


  