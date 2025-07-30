import React from 'react';
import { useEffect, useState } from 'react';
import { IonSelect, IonSelectOption, IonItem } from '@ionic/react';

interface CountryName {
  language: string;
  text: string;
}

interface Country {
  isoCode: string;
  name: CountryName[];
  officialLanguages: string[];
}

interface HomeCountryPickerProps {
  selectedCountry: string;
  onChange?: (value: string) => void;
}

const HomeCountryPicker: React.FC<HomeCountryPickerProps> = ({ selectedCountry, onChange }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selected, setSelected] = useState<string>(selectedCountry);

  useEffect(() => {
    fetch('https://openholidaysapi.org/Countries')
      .then(res => res.json())
      .then((data: Country[]) => {
        setCountries(data);
      });
  }, []);

  const handleChange = (e: CustomEvent) => {
    const selectedValue = e.detail.value;
    setSelected(selectedValue);
    onChange?.(selectedValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <IonItem lines="none" color="light">
        <IonSelect label="choose a country"
          value={selected}
          placeholder="Pick a country"
          onIonChange={handleChange}
        >
          {countries.map((country) => {
            const name = country.name.find(n => n.language === 'EN')?.text || country.isoCode;
            return (
              <IonSelectOption key={country.isoCode} value={country.isoCode}>
                {name}
              </IonSelectOption>
            );
          })}
        </IonSelect>
      </IonItem>
    </div>
  );
};

export default HomeCountryPicker;
