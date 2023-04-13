import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

function ProjectCard({ title, slug, overview, stack, links }) {
    return (
        <Link target="_top" href={`/project/${slug}`}>
            <div className="rounded-[5px] bg-[#110036] mobile:w-[100%] tablet:w-[20rem] laptop:w-[20rem] desktop:w-[20rem] h-[16rem] p-[30px] hover:-translate-y-1 transition-[1.4s]">
                <div className="text-[25px] font-bold">{title}</div>
                <div className="py-5 h-fit">
                    {overview.length > 104
                        ? overview.slice(0, 104) + "..."
                        : overview.slice(0, 104)}
                </div>
                <div className="flex flex-row justify-between items-center">
                    {stack.map((item, i) => (
                        <div key={i} className="text-[12px] text-[#a4a4a4]">{item}</div>
                    ))}
                    <div className="flex flex-row justify-center items-center gap-3">
                        <a target="_blank" href={links.github} rel="noopener noreferrer">
                            <GitHubIcon />
                        </a>
                        {!links.hosted ? (
                            ""
                        ) : (
                            <a target="_blank" href={links.hosted} rel="noopener noreferrer">
                                <LinkIcon />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;
