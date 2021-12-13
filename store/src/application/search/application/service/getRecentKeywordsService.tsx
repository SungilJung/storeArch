import { ColorValue } from 'react-native';
import {GetKeywordsPort} from '../port/out/getKeywordsPort';

const GetRecentKeywordsService = (
  key: string,
  getKeywordsPort: GetKeywordsPort,
) => {
  return getKeywordsPort(key);
}

export default GetRecentKeywordsService;

