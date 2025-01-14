import { useBackend } from '../backend';
import { Icon, Section, Stack } from '../components';
import { Window } from '../layouts';
// SKYRAT EDIT BEGIN
import { Rules } from './AntagInfoRules';
// SKYRAT EDIT END

type Info = {
  antag_name: string;
};

// SKYRAT EDIT change height from 250 to 350
export const AntagInfoClock = (props) => {
  const { data } = useBackend<Info>();
  const { antag_name } = data;
  return (
    <Window width={620} height={350} theme="clockwork">
      <Window.Content>
        <Section scrollable fill>
          <Stack vertical>
            <Stack.Item fontSize="20px" color={'good'}>
              <Icon name={'cog'} rotation={0} spin />
              {' You are the ' + antag_name + '! '}
              <Icon name={'cog'} rotation={35} spin />
            </Stack.Item>
            {/* SKYRAT EDIT ADDITION START */}
            <Stack.Item>
              <Rules />
            </Stack.Item>
            {/* SKYRAT EDIT ADDITION END */}
            <Stack.Item>
              <ObjectivePrintout />
            </Stack.Item>
          </Stack>
        </Section>
      </Window.Content>
    </Window>
  );
};

const ObjectivePrintout = (props) => {
  const { data } = useBackend<Info>();
  return (
    <Stack vertical>
      <Stack.Item bold>Your goals:</Stack.Item>
      <Stack.Item>
        {
          '- Further the goals of any other organization you are a part of using the power granted to you.'
        }
      </Stack.Item>
      <Stack.Item>
        {
          '- Further the grace, knowledge, and glory of our great lord of the Engine, Ratvar.'
        }
      </Stack.Item>
    </Stack>
  );
};
