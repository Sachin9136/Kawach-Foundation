import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./Slice/LoginSlice";
import Plan from "./Slice/Plan";
import Teacher from "./Slice/Teacher";
import Banner from "./Slice/Banner";
import Story from "./Slice/our_story";
import Gallery from "./Slice/Gallery";
import Programme from "./Slice/Programme";
import Team from "./Slice/Team";
import Event from "./Slice/Events";
import News from "./Slice/News";
import Blog from "./Slice/Blog";
const rootReducer = combineReducers({
  auth: authSlice,
  plan: Plan,
  teacher: Teacher,
  banner:Banner,
  story: Story,
  gallery: Gallery,
  programme: Programme,
  team: Team,
  event: Event,
  news: News,
  blog: Blog,
});

export default rootReducer;
