// import React from 'react';
// import { useEffect, useState } from 'react';
// import { IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/react';

// interface CountryName {
//   language: string;
//   text: string;
// }

// interface Country {
//   isoCode: string;
//   name: CountryName[];
//   officialLanguages: string[];
// }

// const CountryPickerHoliday: React.FC = () => {
//   const [country, setCountry] = useState<Country>();

//   useEffect(() => {
//     fetch('https://openholidaysapi.org/PublicHolidays?countryIsoCode=CH&languageIsoCode=EN&validFrom=2025-01-01&validTo=2025-06-30')
//       .then(res => res.json())
//       .then((data: Country[]) => {
//         setCountry(data);
//       });
//   }, []);

//   return (
//     <IonPicker>
//       <IonPickerColumn>
//         <IonPickerColumnOption value="" disabled={true}>
//             --
//         </IonPickerColumnOption>
//         {country.map(country => {
//           // Extract English name from the array
//           const englishNameObj = country.name.find(n => n.language === 'EN');
//           const displayName = englishNameObj ? englishNameObj.text : country.isoCode;
//           return (
//             <IonPickerColumnOption key={country.isoCode} value={country.isoCode}>
//               {displayName}
//             </IonPickerColumnOption>
//           );
//         })}
//       </IonPickerColumn>
//     </IonPicker>
//   );
// };

// export default CountryPickerHoliday;
