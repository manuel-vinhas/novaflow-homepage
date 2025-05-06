import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    return (
        <Accordion type="single" collapsible className="w-full p-8">
            <AccordionItem value="item-1">
                <AccordionTrigger>What is NovaFlow AI and how can it help my business?</AccordionTrigger>
                <AccordionContent>
                    Yes. NovaFlow creates custom AI agents that automate repetitive tasks, analyze data, and optimize business processes. Our solutions significantly reduce operational costs while increasing efficiency across your organization.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>What industries can benefit from NovaFlow&apos;s solutions?</AccordionTrigger>
                <AccordionContent>
                NovaFlow serves multiple sectors including financial services, healthcare, manufacturing, retail, and customer service. Any organization with repetitive processes or data analysis needs can benefit from our AI solutions.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>How long does implementation typically take?</AccordionTrigger>
                <AccordionContent>
                Implementation varies with solution complexity. Simple deployments complete within weeks, while comprehensive enterprise solutions may take a few months. We ensure minimal disruption throughout the process.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
