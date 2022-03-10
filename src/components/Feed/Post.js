import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  CardContent,
  Card,
  Box,
  Chip,
  CardHeader
} from "@mui/material/";
import { makeStyles, useTheme } from "@mui/styles";
import { RichTextEditor } from "@mantine/rte";

import { UserContext } from "components/Routing";
import { getUserDataFromUID } from "utilities/posts";
import AvatarWithTag from "components/AvatarWithTag/AvatarWithTag";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    "&:hover": {
      cursor: "pointer",
    },
    backgroundColor: theme.palette.foreground,
  },
  comment: {
    marginLeft: "6px !important",
    fontsize: "12px",
    color: "grey",
  },
}));

const Post = ({ post }) => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const theme = useTheme();
  const classes = useStyles(theme);
  const users = context.userList;
  const user = getUserDataFromUID(post.author, users);

  const getNumCommentsText = (post) => {
    if (!("numComments" in post)) return "0 Comments";
    const num = post.numComments;
    if (num === 0) return "0 Comments";
    else if (num === 1) return "1 Comment";
    else return `${num} Comments`;
  };
  return (
    <Card
      className={classes.card}
      sx={{ mb: 2, pl: 0.5 }}
      onClick={() => {
        navigate(`/post/${post.id}`);
      }}
    >
      <Box sx={{ ml: 0, mt: 2 }}>
        <AvatarWithTag user={user} post={post} />
      </Box>
      <CardContent sx={{ pt: 0, px: 0 }}>
        {post.title && <Typography sx={{ marginLeft: 3, fontWeight: "500", fontSize: "17px" }}>{post.title}</Typography>}
        <RichTextEditor
          readOnly
          value={post.description}
          style={{ border: "none", marginBottom: -15, marginLeft: 9 }}
        />
        {'tags' in post && post.tags.length > 0 &&
          <Box sx={{ paddingLeft: 2.5, paddingTop: 2 }}>
            {post.tags.map((tag, i) => (
              <Chip
                label={tag}
                key={i}
                color="primary"
                variant="contained"
                size="small"
                sx={{ backgroundColor: "#c0c0c0", color: "#ffffff", mr: 1, mt: 1 }}
              />
            ))}
          </Box>}
      </CardContent>

      <Box sx={{ display: "flex", marginBottom: 2, mx: 2 }}>
        <Typography className={classes.comment} variant="body2">
          {getNumCommentsText(post)}
        </Typography>
      </Box>
    </Card>
  );
};

export default Post;
