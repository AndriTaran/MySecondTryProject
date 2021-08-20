import I18n, { getLanguages } from "react-native-i18n";
import en from './en'
import fr from './fr'

I18n.fallbacks = true;
getLanguages().then(languages => {
   console.log(languages); // ['en-US', 'en']
});
I18n.translations = {
   en,
   fr
}

export default I18n
