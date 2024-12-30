import { Container } from "@mantine/core";
import React from "react";
import MyBlogs from "./MyBlogs";
import Heading from "./Heading";

const Blogs = () => {
  return (
    <Container size="xl" className="w-full py-10 lg:py-16 lg:!px-0 scroll-m-20" id="blogs">
      <Heading />
      <MyBlogs />
    </Container>
  );
};

export default Blogs;
