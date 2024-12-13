import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <div className="col-12 mt-24">
        <h1 className="text-3xl ubuntu-mono-bold mb-4">Welcome to Ardhi App! 🚀</h1>
        <p className="mb-4">
          Bring your geospatial analysis closer to your non-tech users, enabling users to visualize and download data effortlessly.
          It supports data-driven decisions across diverse industries.
        </p>
      
        <div className="flex place-content-center">
          <Button>
            <Link href="/signin">
              Login Or Register
            </Link>
          </Button>
        </div>
      </div>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Ardhi?</AccordionTrigger>
        <AccordionContent>
          Find more information about <a target="_blank" rel="noreferrer" href="https://ardhi.de/"> <span
            className="text-green-500 underline underline-offset-2 ">
            Ardhi </span> on our landing page</a>.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Where can I find information on how to use Ardhi?</AccordionTrigger>
        <AccordionContent>
          To best understand how to use Ardhi, please refer to the <a
            target="_blank" rel="noreferrer"
            href="https://ardhi.slab.com/posts/ardhi-documentation-2k5k1jw3?shr=M-JcpX9CH8sXy5kfFz3uat8A">
            <span className="text-green-500 underline underline-offset-2 "> documentation </span>
          </a>.
          You can also check out our <a
            target="_blank" rel="noreferrer"
            href="https://ardhi.slab.com/posts/help-page-idwmu284?shr=_TwiAyo7tThV4H3IWU7pmshx"> <span
              className="text-green-500 underline underline-offset-2 "> help page </span>
          </a>.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Did you know that Ardhi is An open source project?</AccordionTrigger>
        <AccordionContent>
        Please, find our codes on our <a target="_blank" rel="noreferrer" href="https://ardhi.de/"> <span
            className="text-green-500 underline underline-offset-2 ">
            Github </span>  </a> page.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
