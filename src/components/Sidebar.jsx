"use client"

import { Button, Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { ChevronFirst } from "lucide-react";
import { navLinks } from "../constants";
import Link from 'next/link'
import { DotsHorizontalIcon, HomeIcon, CaretSortIcon } from "@radix-ui/react-icons"
import { useState } from "react";


const Sidebar = () => {
  const [page, setPage] = useState(null)
  const [expanded, setExpanded] = useState(true)
  return (
    <aside className="h-screen font-inter bg-zinc-100 p-2">

      <nav className="h-full flex flex-col ">

        {/** Dashboard Header **/}
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className="flex items-start gap-4">
            <Avatar color="gray" fallback="#"></Avatar>
            <Link className={expanded ? "inline transition-all" : 'hidden transition-all'} href="/">
              <h1 className="font-extrabold text-black">BroCollie</h1>
              <Text as="div" size="1" className="text-black">
                Admin
              </Text>
            </Link>
          </div>
          <CaretSortIcon size="3" className="cursor-pointer"></CaretSortIcon>
        </div>

        {/** Navigation Links **/}
        <ul className="flex-1 p-3 ">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.link}
                className={
                  expanded
                    ? 'text-sm flex transition-all px-4 py-2 items-center gap-4 hover:bg-zinc-200 rounded-md'
                    : 'text-sm flex justify-center transition-all px-4 py-2 hover:bg-zinc-200 rounded-md'
                }
              >
                <Icon className={expanded ? 'transition-all' : 'block'} />
                <span className={expanded ? 'ml-2' : 'hidden'}>{link.name}</span>
              </Link>
            )
          })}
        </ul>

        {/** User Card**/}
        <div className=" flex p-3">
          <Box className="transition-all" maxWidth={expanded ? "240px" : "56px"}>
            <Card>
              <Flex gap="4" align="center">
                <Avatar
                  size="3"
                  src="/profile.jpg"
                  radius="full"
                  fallback="T"
                />
                <Box className="transition-all">
                  <Text as="div" size="2" weight="medium">
                    John Smith
                  </Text>
                  <Text as="div" size="1">
                    johnsmith@gmail.com
                  </Text>
                </Box>
                <DotsHorizontalIcon></DotsHorizontalIcon>
              </Flex>
            </Card>
          </Box>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
