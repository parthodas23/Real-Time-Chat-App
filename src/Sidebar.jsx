import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const roomsCollection = collection(db, "rooms");

    // Listen for real-time updates
    const unsubscribe = onSnapshot(roomsCollection, (snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Partha</h2>
          <h3>
            <FiberManualRecordIcon></FiberManualRecordIcon>
            Partha Das
          </h3>
        </div>
        <CreateIcon></CreateIcon>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"></SidebarOption>

      <SidebarOption
        Icon={InboxIcon}
        title="Mentions & reactions"
      ></SidebarOption>
      <SidebarOption Icon={DraftsIcon} title="Saved items"></SidebarOption>
      <SidebarOption
        Icon={BookmarkBorderIcon}
        title="Channel browser"
      ></SidebarOption>
      <SidebarOption
        Icon={PeopleAltIcon}
        title="People & User groups"
      ></SidebarOption>
      <SidebarOption Icon={AppsIcon} title="Apps"></SidebarOption>
      <SidebarOption Icon={FileCopyIcon} title="File browser"></SidebarOption>
      <SidebarOption Icon={ExpandLessIcon} title="Show less"></SidebarOption>
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Chanels"></SidebarOption>
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel"></SidebarOption>

      {/* Connect to the detabase and list all the channel */}
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
      {/* Sidebaroption ...*/}
    </div>
  );
}

export default Sidebar;
