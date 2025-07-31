import React from 'react';
import { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList, IonText } from '@ionic/react';

interface CountryPickerHolidayProps {
  dateFrom: string;
  dateTo: string;
  selectedCountry: string;
  option: 'PublicHolidays' | 'Schoolholidays';
}

interface HolidayName {
  language: string;
  text: string;
}

interface Holiday {
  id: string,
  startDate: string;
  endDate: string;
  type: string;
  name: HolidayName[];
  regionalScope: string;
  temporalScope: string;
  nationwide: boolean;
}

const CountryPickerHoliday: React.FC<CountryPickerHolidayProps> = ({ dateFrom, dateTo, selectedCountry, option }) => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://openholidaysapi.org/${option}?countryIsoCode=${selectedCountry}&languageIsoCode=EN&validFrom=${dateFrom}&validTo=${dateTo}`)
      .then(res => res.json())
      .then((data: Holiday[]) => {
        setHolidays(data);
      });
  },  [selectedCountry, dateFrom, dateTo]);

  const toggleExpand = (id: string) => {
      setExpandedId(curr => (curr === id ? null : id));
    };

  return (
    <IonList>
       {holidays.map(holiday => {
          // Extract English name from the array
          const englishNameObj = holiday.name.find(n => n.language === 'EN');
          const displayName = englishNameObj ? englishNameObj.text : holiday.id;
          return (
            <div key={holiday.id}>
            <IonItem button detail onClick={() => toggleExpand(holiday.id)}>
              <IonLabel>{displayName}</IonLabel>
            </IonItem>

            {expandedId === holiday.id && (
              <div style={{ padding: '10px 16px' }}>
                <IonText color="medium">
                  <p><strong>Start:</strong> {holiday.startDate}</p>
                  <p><strong>End:</strong> {holiday.endDate}</p>
                  <p><strong>Type:</strong> {holiday.type}</p>
                  <p><strong>Nationwide:</strong> {holiday.nationwide ? 'Yes' : 'No'}</p>
                  <p><strong>Scope:</strong> {holiday.regionalScope}, {holiday.temporalScope}</p>
                </IonText>
              </div>
            )}
          </div>
          );
        })}

    </IonList>
  );
};

export default CountryPickerHoliday;
