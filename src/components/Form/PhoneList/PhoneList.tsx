import React from "react";

import classNames from "classnames";

import { PhoneListProps } from "./PhoneList.types";

import Button from "../Button";
import InputPhone from "../InputPhone";

import { phoneMask } from "../../../utils/mask";

import "./PhoneList.scss";

const PhoneList: React.FC<PhoneListProps> = ({
  setNewTelefones,
  telefones,
  className,
  errors,
}) => {
  const removeTelefone = (index: number) => {
    if (telefones.length > 1) {
      setNewTelefones(telefones.filter((_, i) => index !== i));
      return;
    }

    setNewTelefones([{ numero: "", whatsapp: false }]);
  };

  const toggleWhatsApp = (index: number) => {
    const items = [...telefones];

    items.splice(index, 1, {
      ...telefones[index],
      whatsapp: !telefones[index].whatsapp,
    });

    setNewTelefones(items);
  };

  return (
    <>
      {telefones.map((telefone, index) => (
        <section
          key={`telefone-${index}`}
          className={classNames("telefone-section", className)}
        >
          <InputPhone
            isWhatsapp={telefone.whatsapp}
            error={errors && errors[index]?.numero}
            value={telefone.numero}
            onChange={(value) => {
              const newTelefones = [...telefones];

              newTelefones[index] = {
                ...newTelefones[index],
                numero: phoneMask(value),
                whatsapp: newTelefones[index].whatsapp,
              };

              setNewTelefones(newTelefones);
            }}
            toggleWhatsApp={() => toggleWhatsApp(index)}
          />
          <button
            type="button"
            style={errors ? { alignSelf: "center" } : {}}
            onClick={() => removeTelefone(index)}
          >
            X
          </button>
        </section>
      ))}

      <div className={classNames("button-container-add")}>
        <Button
          type="button"
          onClick={() =>
            setNewTelefones([...telefones, { numero: "", whatsapp: false }])
          }
        >
          Adicionar Telefone
        </Button>
      </div>
    </>
  );
};

export default PhoneList;
