import { Enum } from "@/src/service/subabase/enum.types";
import { Row } from "@/src/service/subabase/table.types";

export type orderType=Enum<"ordertype">
export type orderStatus=Enum<"Enum_Status">
export type orders=Row<"Orders">