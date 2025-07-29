// HomeDatePicker.tsx
import React, { useState } from 'react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';

interface DateRangePickerProps {
  id: string; // Unique ID for the datetime control
  defaultDate: string;
  onChange?: (pdate: string) => void;
}

const HomeDatePicker: React.FC<DateRangePickerProps> = ({ id, defaultDate, onChange }) => {
  const [datePicked, setDatePicked] =  useState<string | undefined>(defaultDate);

  const handleChange = (e: CustomEvent) => {
    const value = e.detail.value;
    setDatePicked(value);
    onChange?.(value);
  };

  return (
    <>

      <IonDatetimeButton datetime={id}  />
      <IonModal keepContentsMounted={true}>
        <IonDatetime
          id={id}
          presentation="date"
          value={datePicked}
          onIonChange={handleChange}
        />
      </IonModal>

    </>
  );
};

export default HomeDatePicker;
