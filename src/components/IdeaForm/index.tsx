import React, { Fragment } from 'react';
import { Form, FormField, TextInput, Button } from 'grommet';

import { IIdea } from '../../common/interfaces';
import * as Styles from './styles';
import { makeFullUrlApiCall } from '../../middleware/axios';

interface FormValues {
  title: string;
  description: string;
}

interface Props {
  afterSubmit?: () => void;
  isUpdateForm?: boolean;
  selectedIdea?: IIdea;
}

export const IdeaForm: React.FC<Props> = ({
  afterSubmit,
  isUpdateForm = false,
  selectedIdea,
}) => {
  const [value, setValue] = React.useState<FormValues>({
    title: selectedIdea ? selectedIdea.title : '',
    description: selectedIdea ? selectedIdea.description : '',
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const resetValue = () =>
    setValue({
      title: '',
      description: '',
    });

  // @ts-ignore
  const onSubmit = async ({ value }) => {
    setIsLoading(true);

    if (isUpdateForm) {
      await makeFullUrlApiCall(`idea/id/${selectedIdea?.ideaId}`, value, 'put');
    } else {
      await makeFullUrlApiCall('idea/create', value, 'post');
    }
    if (afterSubmit) {
      afterSubmit();
    }
    setIsLoading(false);
  };

  return (
    <Styles.Container>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Fragment>
          <Styles.Heading>
            {isUpdateForm ? 'Update your idea!' : 'Create an idea to share!'}
          </Styles.Heading>
          <Form
            value={value}
            onChange={nextValue => setValue(nextValue as FormValues)}
            onReset={resetValue}
            onSubmit={onSubmit}
          >
            <FormField name="title" htmlFor="text-input-id" label="Title">
              <TextInput id="text-input-id" name="title" />
            </FormField>
            <FormField
              name="description"
              htmlFor="text-input-id"
              label="Description"
            >
              <TextInput id="text-input-id" name="description" />
            </FormField>
            <Styles.FormButtonsContainer
              direction="row"
              gap="medium"
              justify="center"
            >
              <Button type="submit" primary label="Submit" />
              <Button type="reset" label="Reset" />
            </Styles.FormButtonsContainer>
          </Form>
        </Fragment>
      )}
    </Styles.Container>
  );
};
