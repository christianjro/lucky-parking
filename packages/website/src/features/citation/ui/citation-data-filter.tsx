import type { onEvent } from "@lucky-parking/typings";
import DateInput from "@lucky-parking/ui/src/components/date-input";
import CitationDataCategorySelection from "./citation-data-category-selection";
import CitationDatePresetsSelection from "./citation-date-presets-selection";

interface CitationDataFilterProps {
  onCategorySelect: onEvent;
  onDatePresetSelect: onEvent;
  onCustomDateSelect: onEvent;
  category: string;
  datePreset: string;
  dateFrom?: string;
  dateTo?: string;
}

export default function CitationDataFilter(props: CitationDataFilterProps) {
  const { onCategorySelect, onDatePresetSelect, onCustomDateSelect, category, datePreset, dateFrom, dateTo } = props;

  return (
  	<>
  		<CitationDataCategorySelection category={category} onSelect={onCategorySelect} />
  		<div className="flex w-full items-center space-x-2">
  			<CitationDatePresetsSelection datePreset={datePreset} onSelect={onDatePresetSelect} />
  			<p className="paragraph-2 text-black-400 font-medium">or</p>
  			<div className="flex flex-auto items-center space-x-1">
  				<DateInput id="From" date={dateFrom} onSelect={onCustomDateSelect}>From</DateInput>
  				<DateInput id="To" date={dateTo} onSelect={onCustomDateSelect}>To</DateInput>
  			</div>
  		</div>
  	</>
  );
}
