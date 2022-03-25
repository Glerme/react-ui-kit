import React from "react";

import classNames from "classnames";

import { EmailListProps } from "./EmailList.types";

import Input from "../Input";
import Button from "../Button";

import "./EmailList.scss";

const EmailList: React.FC<EmailListProps> = ({
  emails,
  setNewEmails,
  className,
  errors,
}) => {
  const removeEmail = (index: number) => {
    if (emails.length > 1) {
      setNewEmails(emails.filter((_, i) => index !== i));
      return;
    }

    setNewEmails([{ email: "" }]);
  };

  return (
    <>
      {emails.map((email, index) => (
        <section
          key={`email-${index}`}
          className={classNames("email-section", className)}
        >
          <Input
            type="email"
            name={`email-${index}`}
            label="E-mail"
            error={errors && errors[index]?.email}
            value={email.email}
            onChange={(value) => {
              const newEmails = [...emails];

              newEmails[index] = { ...newEmails[index], email: value };

              setNewEmails(newEmails);
            }}
          />
          <button
            type="button"
            style={errors ? { alignSelf: "center" } : {}}
            onClick={() => removeEmail(index)}
          >
            X
          </button>
        </section>
      ))}

      <div className={classNames("button-container-add-email")}>
        <Button
          type="button"
          onClick={() => setNewEmails([...emails, { email: "" }])}
        >
          Adicionar E-mail
        </Button>
      </div>
    </>
  );
};

export default EmailList;
