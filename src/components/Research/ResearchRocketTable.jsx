import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const specs = [
    {
        spec: "Height",
        val: "15m",
    },
    {
        spec: "Diameter",
        val: "1.5m",
    },
    {
        spec: "Stages",
        val: "2",
    },
    {
        spec: "Wet Mass",
        val: "15 Tonnes",
    },
    {
        spec: "Payload to LEO",
        val: "300kg",
    },
    {
        spec: "Structure",
        val: "Carbon Composite",
    },
    {
        spec: "Propellant",
        val: "LOX",
    },
]

const ResearchRocketTable = () => {
    return (
        <Table>
            <TableCaption>Specifications of our project.</TableCaption>
            <TableBody>
                {specs.map((spec) => (
                    <TableRow key={spec.spec}>
                        <TableCell className="textLink">{spec.spec}</TableCell>
                        <TableCell className="text-[16px]/[120%] md:text-[20px]/[120%] tracking-tight text-right">{spec.val}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ResearchRocketTable