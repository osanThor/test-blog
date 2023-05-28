import React from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import MarkdownViewer from "./MarkdownViewer";
import { Postdata } from "@/service/posts";

export default function PostContent({ post }: { post: Postdata }) {
  const { title, description, date, content } = post;
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-600">
        <BsFillCalendarCheckFill />
        <p className="ml-2 font-semibold">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="mt-4 mb-8 border-2 w-44 border-sky-600" />
      <MarkdownViewer content={content} />
    </section>
  );
}
