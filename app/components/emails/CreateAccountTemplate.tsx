import * as React from 'react';

interface CreateAccountTemplateProps {
  firstName: string;
}

export const CreateAccountTemplate: React.FC<
  Readonly<CreateAccountTemplateProps>
> = ({ firstName }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
