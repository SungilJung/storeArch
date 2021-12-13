import { Keyword } from '../../domain/keyword';
import {GetKeywordsPort} from '../port/out/getKeywordsPort';

const GetRecentKeywordsService = (
  key: string,
  getKeywordsPort: GetKeywordsPort,
): Promise<Array<Keyword>> => {
  let keywords = getKeywordsPort(key).then((resolve) => {
    let data:Keyword[] = JSON.parse(resolve);
    return data.slice(0,10);
  });

  return keywords;
}

export default GetRecentKeywordsService;

