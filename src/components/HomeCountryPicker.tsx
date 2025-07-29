import React from 'react';
import { useEffect, useState } from 'react';
import { IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/react';

interface CountryName {
  language: string;
  text: string;
}

interface Country {
  isoCode: string;
  name: CountryName[];
  officialLanguages: string[];
}

const HomeCountryPicker: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch('https://openholidaysapi.org/Countries')
      .then(res => res.json())
      .then((data: Country[]) => {
        setCountries(data);
      });
  }, []);

  return (
    <IonPicker>
      <IonPickerColumn>
        <IonPickerColumnOption value="" disabled={true}>
            --
        </IonPickerColumnOption>
        {countries.map(country => {
          // Extract English name from the array
          const englishNameObj = country.name.find(n => n.language === 'EN');
          const displayName = englishNameObj ? englishNameObj.text : country.isoCode;
          return (
            <IonPickerColumnOption key={country.isoCode} value={country.isoCode}>
              {displayName}
            </IonPickerColumnOption>
          );
        })}
      </IonPickerColumn>
    </IonPicker>
  );
};

export default HomeCountryPicker;
