import React, { FC, useState } from 'react';
import { useTeamsQuery } from 'hooks/graphql';
import {
  Loader,
  Error,
  ModalExpel,
  ModalJoin,
  ModalCreated,
  ModalCreateTeam,
} from 'components';
import { Team } from 'types';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { Button } from 'typography';

export const ModalSamples: FC = () => {
  const [modalOpened1, setModalOpened1] = useState<boolean>(false);
  const [modalOpened2, setModalOpened2] = useState<boolean>(false);
  const [modalOpened3, setModalOpened3] = useState<boolean>(false);
  const [modalOpened4, setModalOpened4] = useState<boolean>(false);
  const [modalOpened5, setModalOpened5] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>('');

  const hideModal1 = () => setModalOpened1(false);
  const hideModal2 = () => setModalOpened2(false);
  const hideModal3 = () => setModalOpened3(false);
  const hideModal4 = () => setModalOpened4(false);
  const hideModal5 = () => setModalOpened5(false);

  const showModal1 = () => setModalOpened1(true);
  const showModal2 = () => setModalOpened2(true);
  const showModal3 = () => setModalOpened3(true);
  const showModal4 = () => setModalOpened4(true);
  const showModal5 = () => setModalOpened5(true);

  const onSubmit = (e: string) => {
    setInputValue(e);
    console.log('onSubmit', e);
  };

  const password = 'password';

  const createdText =
    'You are automatically added there.<br>If you want to invite friends - tell them your team password:';

  return (
    <>
      <div>
        <p>Input Value {inputValue}</p>

        <Button type="button" onClick={showModal1}>
          modal1 Leave Team
        </Button>
        <Button type="button" onClick={showModal2}>
          modal2 Expel User
        </Button>
        <Button type="button" onClick={showModal3}>
          modal3 Create team
        </Button>
        <Button type="button" onClick={showModal4}>
          modal4 Join team
        </Button>
        <Button type="button" onClick={showModal5}>
          modal5 Created
        </Button>
      </div>
      <ModalExpel
        title="Leave Team"
        text="Are you sure want to leave team?"
        open={modalOpened1}
        onSubmit={onSubmit}
        onClose={hideModal1}
        okText="Yes!"
        cancelText="No"
      />
      <ModalExpel
        title="Expel User"
        text="Are you sure want to expel user?"
        open={modalOpened2}
        onSubmit={onSubmit}
        onClose={hideModal2}
        okText="Yes!"
        cancelText="No"
      />
      <ModalCreateTeam
        title="Create Team"
        text="Please enter your team telegram / discord / viber / ets. group link."
        open={modalOpened3}
        onSubmit={onSubmit}
        onClose={hideModal3}
        okText="Create team"
      />

      <ModalJoin
        title="Join team"
        text="Please enter your team password."
        open={modalOpened4}
        onSubmit={onSubmit}
        onClose={hideModal4}
        okText="Join team"
        // cancelText="No"
      />

      <ModalCreated
        title="New team created!"
        text={createdText}
        open={modalOpened5}
        // onSubmit={onSubmit}
        onClose={hideModal5}
        // okText="Yes!"
        cancelText="Got it!"
        password={password}
      />
    </>
  );
};
