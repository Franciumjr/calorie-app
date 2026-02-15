"use client"

import { Button, Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { ChevronFirst } from "lucide-react";
import { navLinks } from "../constants";
import Link from 'next/link'
import { DotsHorizontalIcon, HomeIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons"
import { useState } from "react";


const Sidebar = () => {
  const [page, setPage] = useState(null)
  const [expanded, setExpanded] = useState(true)
  return (
    <aside className="h-screen font-inter bg-zinc-800">
      <nav className="h-full flex flex-col ">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className="flex items-start gap-4">
          <Avatar color="white" fallback ="#"></Avatar>
          <Link className={expanded ? "inline transition-all" : 'hidden transition-all'} to="/">
            <h1 className="font-extrabold text-white">BroCollie</h1>
            <Text as="div" size="1" color="gray">
                    Admin
            </Text>
          </Link>
          </div>
          
          <Button className="cursor-pointer" onClick={() => setExpanded(curr => !curr)} variant="soft" color="gray" radius="full">
          {expanded ? <DoubleArrowLeftIcon></DoubleArrowLeftIcon> : <DoubleArrowRightIcon></DoubleArrowRightIcon>}
           
            </Button>
        </div>
        <ul className="flex-1 p-3 ">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                to={link.link}
                className={
                  expanded
                    ? 'text-sm flex transition-all px-4 py-2 items-center gap-4 hover:bg-zinc-700 rounded-md'
                    : 'text-sm flex justify-center transition-all px-4 py-2 hover:bg-zinc-700 rounded-md'
                }
              >
                <Icon className={expanded ? 'transition-all' : 'block'} />
                <span className={expanded ? 'ml-2' : 'hidden'}>{link.name}</span>
              </Link>
            )
          })}
        </ul>
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
                  <Text   as="div" size="2" weight="medium">
                    John Smith
                  </Text>
                  <Text as="div" size="1" color="gray">
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
