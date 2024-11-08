"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./button";
import sendToMixpanel from "@/src/lib/sendToMixpanel";

const GoToBlogArticleButton = ({
  research,
}: {
  research: {
    id: string;
    description: string;
    link: string;
  };
}) => {
  return (
    <Link
      onClick={() =>
        sendToMixpanel("blog_article_clicked", { blogId: research.id })
      }
      href={research.link}
    >
      <Button
        className="bg-transparent text-outlaw text-primary-green border-none p-0"
        variant="link"
      >
        Bővebben
      </Button>
    </Link>
  );
};

export default GoToBlogArticleButton;
