import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/Components/ui/card";
import { Input, LogoWithLabel } from "@/Components";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Button } from "@mui/material";
import Icon from "../assets/photos/homeIcon.svg?react";
import { BackButton, ChatBubble } from "@/features/chatbot";
import useIsSmallScreen from "@/hooks/useIsSmallScreen ";

const Chatbot = () => {
  const isSmallScreen = useIsSmallScreen();
  const goBackPage = BackButton();
  return (
    <Card className="container  !max-w-5xl px-0 sm:px-5 md:px-15 py-0 sm:py-5 md:py-20 flex justify-center items-center rounded-4xl md:rounded-[6rem] shadow-lg bg-[rgba(255,255,255,0.21)] border-0 overflow-hidden">
      <div className=" w-full max-w-full  bg-[rgba(255,255,255,1)] rounded-4xl md:rounded-[4rem] border-[rgba(173,181, 195,0.24)] overflow-hidden">

         {/* Header  */}

        <CardHeader className="pt-3 sm:pt-6 pb-4 px-2 sm:px-5  gap-0">
          <div className="flex justify-between items-center">
            <LogoWithLabel
              Icon={Icon}
              classIcon="w-30 -ml-8"
              label={isSmallScreen ? "AI Assistant" : "Hub State AI Assistant"}
              classLabel="
        !text-[rgba(58,51,180,1)] !text:xl sm:!text-4xl !font-normal -ml-13 "
            />
            <span
              className="flex justify-center items-center w-6 h-6 transition-all duration-300 
              text-[rgba(0,0,0,0.31)] text-2xl sm:text-4xl mr-2 !cursor-pointer hover:!text-[rgba(0,0,0,0.4)] hover:scale-105"
              onClick={goBackPage}
            >
              x
            </span>
          </div>
          <p className="text-xs sm:text-xl text-[rgba(169,173,192,1)] font-normal  ml-10 sm:ml-12">
            Your intelligent property guide
          </p>
        </CardHeader>

         {/* Chat Messages */}

        <CardContent className="h-100 pt-5 sm:pt-10 px-2 sm:px-5 border  border-y-[rgba(173,181,195,0.99)]">
          <ScrollArea className="h-full space-y-2 ">
            <ChatBubble type="bot" />
            <ChatBubble type="user" />
            <ChatBubble type="bot" className="min-h-50 rounded-b-[5px]" />
          </ScrollArea>
        </CardContent>

         {/* Footer */}

        <CardFooter className="p-4 sm:p-7 ">
          <form className="w-full flex items-center gap-6">
            <Input
              placeholder="Typing Message......"
              className="flex-1  p-6 bg-[linear-gradient(90deg,rgba(238,238,238,1)_0%,rgba(233,233,233,1)_100%)] rounded-2xl placeholder:text-[rgba(169,173,192,1)] placeholder:sm:text-2xl placeholder:text-lg"
            />
            <Button
              type="submit"
              className="shrink-0 !px-2 sm:!px-4 !py-2 bg-[linear-gradient(180deg,rgba(59,130,246,1)_0%,rgba(118,75,162,1)_100%)] !text-[rgba(255,255,255,1)] !rounded-none !text-lg sm:!text-2xl !capitalize hover:scale-95 !shadow-accent-foreground !transition-all !duration-300"
            >
              Send
            </Button>
          </form>
        </CardFooter>
      </div>
    </Card>
  );
};
export default Chatbot;

