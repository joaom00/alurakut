import Box from "../Box";
import AlurakutProfileSidebarMenuDefault from "../AlurakutProfileSidebarMenuDefault";

const ProfileSidebar = ({ githubUser }) => {
  return (
    <Box>
      <img
        src={`https://github.com/${githubUser}.png`}
        style={{ borderRadius: "8px" }}
        alt="Foto de João Pedro"
      />
      <hr />

      <a href={`https://github.com/${githubUser}`}>@{githubUser}</a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
};

export default ProfileSidebar;
