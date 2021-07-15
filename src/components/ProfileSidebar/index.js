import Box from '../Box';

const ProfileSidebar = ({ githubUser }) => {
  return (
    <Box>
      <img
        src={`https://github.com/${githubUser}.png`}
        style={{ borderRadius: '8px' }}
      />
    </Box>
  );
};

export default ProfileSidebar;
