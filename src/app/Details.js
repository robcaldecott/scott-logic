import React, { Fragment } from "react";
import Card from "../components/Card";
import TabBar from "../components/TabBar";
import UserDetailsContainer from "../containers/UserDetailsContainer";
import PostsContainer from "../containers/PostsContainer";
import AlbumsContainer from "../containers/AlbumsContainer";
import TodosContainer from "../containers/TodosContainer";

// Render the main details view
const Details = ({ activeTab, setActiveTab }) => (
  <Fragment>
    <Card>
      <TabBar activeTab={activeTab} onClick={setActiveTab} />
    </Card>

    {activeTab === 0 && <UserDetailsContainer />}
    {activeTab === 1 && <PostsContainer />}
    {activeTab === 2 && <AlbumsContainer />}
    {activeTab === 3 && <TodosContainer />}
  </Fragment>
);

export default Details;
