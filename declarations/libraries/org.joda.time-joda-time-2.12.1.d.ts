declare module org {
	export module joda {
		export module time {
			export abstract class Chronology extends java.lang.Object {
				public static class: java.lang.Class<org.joda.time.Chronology>;
				public days(): org.joda.time.DurationField;
				public getZone(): org.joda.time.DateTimeZone;
				public weekOfWeekyear(): org.joda.time.DateTimeField;
				public millisOfDay(): org.joda.time.DateTimeField;
				public add(param0: number, param1: number, param2: number): number;
				public constructor();
				public millis(): org.joda.time.DurationField;
				public hourOfHalfday(): org.joda.time.DateTimeField;
				public validate(param0: org.joda.time.ReadablePartial, param1: number[]): void;
				public centuries(): org.joda.time.DurationField;
				public secondOfMinute(): org.joda.time.DateTimeField;
				public minuteOfDay(): org.joda.time.DateTimeField;
				public toString(): string;
				public months(): org.joda.time.DurationField;
				public get(param0: org.joda.time.ReadablePeriod, param1: number): number[];
				public years(): org.joda.time.DurationField;
				public clockhourOfHalfday(): org.joda.time.DateTimeField;
				public hours(): org.joda.time.DurationField;
				public centuryOfEra(): org.joda.time.DateTimeField;
				public withUTC(): org.joda.time.Chronology;
				public weekyear(): org.joda.time.DateTimeField;
				public secondOfDay(): org.joda.time.DateTimeField;
				public yearOfCentury(): org.joda.time.DateTimeField;
				public weekyearOfCentury(): org.joda.time.DateTimeField;
				public dayOfWeek(): org.joda.time.DateTimeField;
				public year(): org.joda.time.DateTimeField;
				public halfdayOfDay(): org.joda.time.DateTimeField;
				public clockhourOfDay(): org.joda.time.DateTimeField;
				public millisOfSecond(): org.joda.time.DateTimeField;
				public get(param0: org.joda.time.ReadablePeriod, param1: number, param2: number): number[];
				public minuteOfHour(): org.joda.time.DateTimeField;
				public get(param0: org.joda.time.ReadablePartial, param1: number): number[];
				public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
				public weeks(): org.joda.time.DurationField;
				public weekyears(): org.joda.time.DurationField;
				public eras(): org.joda.time.DurationField;
				public monthOfYear(): org.joda.time.DateTimeField;
				public halfdays(): org.joda.time.DurationField;
				public add(param0: org.joda.time.ReadablePeriod, param1: number, param2: number): number;
				public dayOfYear(): org.joda.time.DateTimeField;
				public seconds(): org.joda.time.DurationField;
				public minutes(): org.joda.time.DurationField;
				public hourOfDay(): org.joda.time.DateTimeField;
				public yearOfEra(): org.joda.time.DateTimeField;
				public set(param0: org.joda.time.ReadablePartial, param1: number): number;
				public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
				public era(): org.joda.time.DateTimeField;
				public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number): number;
				public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number): number;
				public dayOfMonth(): org.joda.time.DateTimeField;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class DateMidnight extends org.joda.time.base.BaseDateTime implements org.joda.time.ReadableDateTime, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.DateMidnight>;
				public getZone(): org.joda.time.DateTimeZone;
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.DateMidnight;
				public withChronology(param0: org.joda.time.Chronology): org.joda.time.DateMidnight;
				public dayOfYear(): org.joda.time.DateMidnight.Property;
				public getSecondOfDay(): number;
				public withCenturyOfEra(param0: number): org.joda.time.DateMidnight;
				public getYearOfCentury(): number;
				public isEqual(param0: number): boolean;
				public yearOfCentury(): org.joda.time.DateMidnight.Property;
				public toDateTime(): org.joda.time.DateTime;
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.DateMidnight;
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.DateMidnight.Property;
				public minusDays(param0: number): org.joda.time.DateMidnight;
				public getDayOfWeek(): number;
				public constructor(param0: number, param1: number, param2: number, param3: org.joda.time.Chronology);
				public plusMonths(param0: number): org.joda.time.DateMidnight;
				public isAfter(param0: number): boolean;
				public withZoneRetainFields(param0: org.joda.time.DateTimeZone): org.joda.time.DateMidnight;
				public withEra(param0: number): org.joda.time.DateMidnight;
				public getCenturyOfEra(): number;
				public constructor(param0: any, param1: org.joda.time.DateTimeZone);
				public withYear(param0: number): org.joda.time.DateMidnight;
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.DateMidnight;
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public withField(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.DateMidnight;
				public getMillisOfDay(): number;
				public era(): org.joda.time.DateMidnight.Property;
				public withYearOfCentury(param0: number): org.joda.time.DateMidnight;
				public plusDays(param0: number): org.joda.time.DateMidnight;
				public constructor(param0: org.joda.time.DateTimeZone);
				public getMinuteOfHour(): number;
				public constructor(param0: org.joda.time.Chronology);
				public getYear(): number;
				public toDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public constructor(param0: number, param1: number, param2: number, param3: org.joda.time.DateTimeZone);
				public withDayOfYear(param0: number): org.joda.time.DateMidnight;
				public getWeekOfWeekyear(): number;
				public minusWeeks(param0: number): org.joda.time.DateMidnight;
				public plusYears(param0: number): org.joda.time.DateMidnight;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: org.joda.time.DateTimeZone);
				public minusYears(param0: number): org.joda.time.DateMidnight;
				public static now(): org.joda.time.DateMidnight;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public get(param0: org.joda.time.DateTimeField): number;
				public plusWeeks(param0: number): org.joda.time.DateMidnight;
				public constructor(param0: number, param1: org.joda.time.DateTimeZone);
				public checkInstant(param0: number, param1: org.joda.time.Chronology): number;
				public centuryOfEra(): org.joda.time.DateMidnight.Property;
				public dayOfMonth(): org.joda.time.DateMidnight.Property;
				public getEra(): number;
				public getMillisOfSecond(): number;
				public withDurationAdded(param0: number, param1: number): org.joda.time.DateMidnight;
				public toString(param0: string): string;
				public static parse(param0: string): org.joda.time.DateMidnight;
				public toMutableDateTime(): org.joda.time.MutableDateTime;
				public constructor(param0: number);
				public yearOfEra(): org.joda.time.DateMidnight.Property;
				public weekyear(): org.joda.time.DateMidnight.Property;
				public minus(param0: org.joda.time.ReadableDuration): org.joda.time.DateMidnight;
				public withDayOfMonth(param0: number): org.joda.time.DateMidnight;
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public getHourOfDay(): number;
				public hashCode(): number;
				public minus(param0: number): org.joda.time.DateMidnight;
				public static now(param0: org.joda.time.DateTimeZone): org.joda.time.DateMidnight;
				public equals(param0: any): boolean;
				public withDurationAdded(param0: org.joda.time.ReadableDuration, param1: number): org.joda.time.DateMidnight;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public toString(param0: string, param1: java.util.Locale): string;
				public getMonthOfYear(): number;
				public getYearOfEra(): number;
				public isEqual(param0: org.joda.time.ReadableInstant): boolean;
				public withPeriodAdded(param0: org.joda.time.ReadablePeriod, param1: number): org.joda.time.DateMidnight;
				public getMinuteOfDay(): number;
				public minusMonths(param0: number): org.joda.time.DateMidnight;
				public toInterval(): org.joda.time.Interval;
				public withDayOfWeek(param0: number): org.joda.time.DateMidnight;
				public withFields(param0: org.joda.time.ReadablePartial): org.joda.time.DateMidnight;
				public toString(): string;
				public monthOfYear(): org.joda.time.DateMidnight.Property;
				public weekOfWeekyear(): org.joda.time.DateMidnight.Property;
				public withYearOfEra(param0: number): org.joda.time.DateMidnight;
				public plus(param0: org.joda.time.ReadableDuration): org.joda.time.DateMidnight;
				public getDayOfYear(): number;
				public isBefore(param0: number): boolean;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public constructor(param0: any);
				public getWeekyear(): number;
				public constructor(param0: number, param1: number, param2: number);
				public withMonthOfYear(param0: number): org.joda.time.DateMidnight;
				public toInstant(): org.joda.time.Instant;
				public getDayOfMonth(): number;
				public getSecondOfMinute(): number;
				public toMutableDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.MutableDateTime;
				public withMillis(param0: number): org.joda.time.DateMidnight;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: org.joda.time.Chronology);
				public getChronology(): org.joda.time.Chronology;
				public plus(param0: number): org.joda.time.DateMidnight;
				public toMutableDateTime(param0: org.joda.time.Chronology): org.joda.time.MutableDateTime;
				public getMillis(): number;
				public static parse(param0: string, param1: org.joda.time.format.DateTimeFormatter): org.joda.time.DateMidnight;
				public dayOfWeek(): org.joda.time.DateMidnight.Property;
				public withWeekyear(param0: number): org.joda.time.DateMidnight;
				public toDateTime(param0: org.joda.time.Chronology): org.joda.time.DateTime;
				public static now(param0: org.joda.time.Chronology): org.joda.time.DateMidnight;
				public withWeekOfWeekyear(param0: number): org.joda.time.DateMidnight;
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public year(): org.joda.time.DateMidnight.Property;
				public toLocalDate(): org.joda.time.LocalDate;
				/** @deprecated */
				public toYearMonthDay(): org.joda.time.YearMonthDay;
			}
			export module DateMidnight {
				export class Property extends org.joda.time.field.AbstractReadableInstantFieldProperty {
					public static class: java.lang.Class<org.joda.time.DateMidnight.Property>;
					public roundCeilingCopy(): org.joda.time.DateMidnight;
					public setCopy(param0: number): org.joda.time.DateMidnight;
					public getDateMidnight(): org.joda.time.DateMidnight;
					public roundFloorCopy(): org.joda.time.DateMidnight;
					public setCopy(param0: string): org.joda.time.DateMidnight;
					public addToCopy(param0: number): org.joda.time.DateMidnight;
					public roundHalfEvenCopy(): org.joda.time.DateMidnight;
					public roundHalfFloorCopy(): org.joda.time.DateMidnight;
					public addWrapFieldToCopy(param0: number): org.joda.time.DateMidnight;
					public getField(): org.joda.time.DateTimeField;
					public setCopy(param0: string, param1: java.util.Locale): org.joda.time.DateMidnight;
					public withMinimumValue(): org.joda.time.DateMidnight;
					public getMillis(): number;
					public withMaximumValue(): org.joda.time.DateMidnight;
					public getChronology(): org.joda.time.Chronology;
					public roundHalfCeilingCopy(): org.joda.time.DateMidnight;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class DateTime extends org.joda.time.base.BaseDateTime implements org.joda.time.ReadableDateTime, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.DateTime>;
				public minusHours(param0: number): org.joda.time.DateTime;
				public dayOfYear(): org.joda.time.DateTime.Property;
				public millisOfDay(): org.joda.time.DateTime.Property;
				public plusYears(param0: number): org.joda.time.DateTime;
				public getZone(): org.joda.time.DateTimeZone;
				public plusWeeks(param0: number): org.joda.time.DateTime;
				public getSecondOfDay(): number;
				public getYearOfCentury(): number;
				public withHourOfDay(param0: number): org.joda.time.DateTime;
				public isEqual(param0: number): boolean;
				public toDateTime(): org.joda.time.DateTime;
				public hourOfDay(): org.joda.time.DateTime.Property;
				public plusSeconds(param0: number): org.joda.time.DateTime;
				public withWeekyear(param0: number): org.joda.time.DateTime;
				public minusSeconds(param0: number): org.joda.time.DateTime;
				public minusWeeks(param0: number): org.joda.time.DateTime;
				public getDayOfWeek(): number;
				public withField(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.DateTime;
				public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public static now(): org.joda.time.DateTime;
				public isAfter(param0: number): boolean;
				public withDate(param0: org.joda.time.LocalDate): org.joda.time.DateTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
				public plus(param0: number): org.joda.time.DateTime;
				public secondOfDay(): org.joda.time.DateTime.Property;
				public withTime(param0: number, param1: number, param2: number, param3: number): org.joda.time.DateTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: org.joda.time.Chronology);
				public getCenturyOfEra(): number;
				public minusYears(param0: number): org.joda.time.DateTime;
				public constructor(param0: any, param1: org.joda.time.DateTimeZone);
				public static now(param0: org.joda.time.Chronology): org.joda.time.DateTime;
				public monthOfYear(): org.joda.time.DateTime.Property;
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public plus(param0: org.joda.time.ReadableDuration): org.joda.time.DateTime;
				public getMillisOfDay(): number;
				public withDayOfWeek(param0: number): org.joda.time.DateTime;
				public withDurationAdded(param0: org.joda.time.ReadableDuration, param1: number): org.joda.time.DateTime;
				public plusHours(param0: number): org.joda.time.DateTime;
				public minus(param0: number): org.joda.time.DateTime;
				public withSecondOfMinute(param0: number): org.joda.time.DateTime;
				public constructor(param0: org.joda.time.DateTimeZone);
				public withMillisOfDay(param0: number): org.joda.time.DateTime;
				public getMinuteOfHour(): number;
				public constructor(param0: org.joda.time.Chronology);
				public withEarlierOffsetAtOverlap(): org.joda.time.DateTime;
				public getYear(): number;
				public toDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public withEra(param0: number): org.joda.time.DateTime;
				public plusMinutes(param0: number): org.joda.time.DateTime;
				public getWeekOfWeekyear(): number;
				public dayOfMonth(): org.joda.time.DateTime.Property;
				public minusDays(param0: number): org.joda.time.DateTime;
				public static parse(param0: string): org.joda.time.DateTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: org.joda.time.DateTimeZone);
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.DateTime;
				public era(): org.joda.time.DateTime.Property;
				public minusMinutes(param0: number): org.joda.time.DateTime;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public minusMonths(param0: number): org.joda.time.DateTime;
				public withZoneRetainFields(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public get(param0: org.joda.time.DateTimeField): number;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: org.joda.time.DateTimeZone);
				public constructor(param0: number, param1: org.joda.time.DateTimeZone);
				public withDayOfYear(param0: number): org.joda.time.DateTime;
				public withTimeAtStartOfDay(): org.joda.time.DateTime;
				public withYearOfEra(param0: number): org.joda.time.DateTime;
				public getEra(): number;
				public getMillisOfSecond(): number;
				public withDate(param0: number, param1: number, param2: number): org.joda.time.DateTime;
				public toString(param0: string): string;
				public withTime(param0: org.joda.time.LocalTime): org.joda.time.DateTime;
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.DateTime.Property;
				/** @deprecated */
				public toTimeOfDay(): org.joda.time.TimeOfDay;
				public withMonthOfYear(param0: number): org.joda.time.DateTime;
				public year(): org.joda.time.DateTime.Property;
				public toMutableDateTime(): org.joda.time.MutableDateTime;
				public constructor(param0: number);
				public withDurationAdded(param0: number, param1: number): org.joda.time.DateTime;
				/** @deprecated */
				public toDateMidnight(): org.joda.time.DateMidnight;
				public toLocalDateTime(): org.joda.time.LocalDateTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: org.joda.time.DateTimeZone);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: org.joda.time.Chronology);
				public withChronology(param0: org.joda.time.Chronology): org.joda.time.DateTime;
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public getHourOfDay(): number;
				public withYearOfCentury(param0: number): org.joda.time.DateTime;
				public minuteOfHour(): org.joda.time.DateTime.Property;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public toString(param0: string, param1: java.util.Locale): string;
				public plusMillis(param0: number): org.joda.time.DateTime;
				public getMonthOfYear(): number;
				public getYearOfEra(): number;
				public toLocalTime(): org.joda.time.LocalTime;
				public yearOfEra(): org.joda.time.DateTime.Property;
				public isEqual(param0: org.joda.time.ReadableInstant): boolean;
				public withMinuteOfHour(param0: number): org.joda.time.DateTime;
				public withFields(param0: org.joda.time.ReadablePartial): org.joda.time.DateTime;
				public minusMillis(param0: number): org.joda.time.DateTime;
				public getMinuteOfDay(): number;
				public toString(): string;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
				public plusDays(param0: number): org.joda.time.DateTime;
				public withDayOfMonth(param0: number): org.joda.time.DateTime;
				public withPeriodAdded(param0: org.joda.time.ReadablePeriod, param1: number): org.joda.time.DateTime;
				public plusMonths(param0: number): org.joda.time.DateTime;
				public withCenturyOfEra(param0: number): org.joda.time.DateTime;
				public getDayOfYear(): number;
				public isBefore(param0: number): boolean;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public constructor(param0: any);
				public getWeekyear(): number;
				public minus(param0: org.joda.time.ReadableDuration): org.joda.time.DateTime;
				public dayOfWeek(): org.joda.time.DateTime.Property;
				public toInstant(): org.joda.time.Instant;
				public getDayOfMonth(): number;
				public getSecondOfMinute(): number;
				public toMutableDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.MutableDateTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.DateTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: org.joda.time.Chronology);
				public withWeekOfWeekyear(param0: number): org.joda.time.DateTime;
				public yearOfCentury(): org.joda.time.DateTime.Property;
				public getChronology(): org.joda.time.Chronology;
				public centuryOfEra(): org.joda.time.DateTime.Property;
				public toMutableDateTime(param0: org.joda.time.Chronology): org.joda.time.MutableDateTime;
				public millisOfSecond(): org.joda.time.DateTime.Property;
				public toDateTimeISO(): org.joda.time.DateTime;
				public getMillis(): number;
				public withMillisOfSecond(param0: number): org.joda.time.DateTime;
				public withLaterOffsetAtOverlap(): org.joda.time.DateTime;
				public secondOfMinute(): org.joda.time.DateTime.Property;
				public toDateTime(param0: org.joda.time.Chronology): org.joda.time.DateTime;
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.DateTime;
				public minuteOfDay(): org.joda.time.DateTime.Property;
				public static now(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public weekOfWeekyear(): org.joda.time.DateTime.Property;
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public toLocalDate(): org.joda.time.LocalDate;
				public withMillis(param0: number): org.joda.time.DateTime;
				public static parse(param0: string, param1: org.joda.time.format.DateTimeFormatter): org.joda.time.DateTime;
				public withYear(param0: number): org.joda.time.DateTime;
				/** @deprecated */
				public toYearMonthDay(): org.joda.time.YearMonthDay;
				public weekyear(): org.joda.time.DateTime.Property;
			}
			export module DateTime {
				export class Property extends org.joda.time.field.AbstractReadableInstantFieldProperty {
					public static class: java.lang.Class<org.joda.time.DateTime.Property>;
					public roundHalfCeilingCopy(): org.joda.time.DateTime;
					public addWrapFieldToCopy(param0: number): org.joda.time.DateTime;
					public roundHalfFloorCopy(): org.joda.time.DateTime;
					public setCopy(param0: string, param1: java.util.Locale): org.joda.time.DateTime;
					public roundCeilingCopy(): org.joda.time.DateTime;
					public withMinimumValue(): org.joda.time.DateTime;
					public roundFloorCopy(): org.joda.time.DateTime;
					public getField(): org.joda.time.DateTimeField;
					public getMillis(): number;
					public getDateTime(): org.joda.time.DateTime;
					public setCopy(param0: number): org.joda.time.DateTime;
					public roundHalfEvenCopy(): org.joda.time.DateTime;
					public addToCopy(param0: number): org.joda.time.DateTime;
					public setCopy(param0: string): org.joda.time.DateTime;
					public getChronology(): org.joda.time.Chronology;
					public withMaximumValue(): org.joda.time.DateTime;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class DateTimeComparator extends java.lang.Object {
				public static class: java.lang.Class<org.joda.time.DateTimeComparator>;
				public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static reverseOrder(): java.util.Comparator<any>;
				public static getTimeOnlyInstance(): org.joda.time.DateTimeComparator;
				public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public compare(param0: any, param1: any): number;
				public getLowerLimit(): org.joda.time.DateTimeFieldType;
				public reversed(): java.util.Comparator<any>;
				public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public static naturalOrder(): java.util.Comparator<any>;
				public static getInstance(param0: org.joda.time.DateTimeFieldType): org.joda.time.DateTimeComparator;
				public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public constructor(param0: org.joda.time.DateTimeFieldType, param1: org.joda.time.DateTimeFieldType);
				public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
				public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public static getInstance(): org.joda.time.DateTimeComparator;
				public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public toString(): string;
				public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public static getDateOnlyInstance(): org.joda.time.DateTimeComparator;
				public getUpperLimit(): org.joda.time.DateTimeFieldType;
				public equals(obj: any): boolean;
				public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static getInstance(param0: org.joda.time.DateTimeFieldType, param1: org.joda.time.DateTimeFieldType): org.joda.time.DateTimeComparator;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class DateTimeConstants extends java.lang.Object {
				public static class: java.lang.Class<org.joda.time.DateTimeConstants>;
				public static JANUARY: number;
				public static FEBRUARY: number;
				public static MARCH: number;
				public static APRIL: number;
				public static MAY: number;
				public static JUNE: number;
				public static JULY: number;
				public static AUGUST: number;
				public static SEPTEMBER: number;
				public static OCTOBER: number;
				public static NOVEMBER: number;
				public static DECEMBER: number;
				public static MONDAY: number;
				public static TUESDAY: number;
				public static WEDNESDAY: number;
				public static THURSDAY: number;
				public static FRIDAY: number;
				public static SATURDAY: number;
				public static SUNDAY: number;
				public static AM: number;
				public static PM: number;
				public static BC: number;
				public static BCE: number;
				public static AD: number;
				public static CE: number;
				public static MILLIS_PER_SECOND: number;
				public static SECONDS_PER_MINUTE: number;
				public static MILLIS_PER_MINUTE: number;
				public static MINUTES_PER_HOUR: number;
				public static SECONDS_PER_HOUR: number;
				public static MILLIS_PER_HOUR: number;
				public static HOURS_PER_DAY: number;
				public static MINUTES_PER_DAY: number;
				public static SECONDS_PER_DAY: number;
				public static MILLIS_PER_DAY: number;
				public static DAYS_PER_WEEK: number;
				public static HOURS_PER_WEEK: number;
				public static MINUTES_PER_WEEK: number;
				public static SECONDS_PER_WEEK: number;
				public static MILLIS_PER_WEEK: number;
				public constructor();
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export abstract class DateTimeField extends java.lang.Object {
				public static class: java.lang.Class<org.joda.time.DateTimeField>;
				public add(param0: number, param1: number): number;
				public roundHalfCeiling(param0: number): number;
				public getLeapAmount(param0: number): number;
				public get(param0: number): number;
				public getMinimumValue(param0: number): number;
				public roundCeiling(param0: number): number;
				public constructor();
				public setExtended(param0: number, param1: number): number;
				public roundHalfFloor(param0: number): number;
				public isLenient(): boolean;
				public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
				public getAsText(param0: number): string;
				public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
				public set(param0: number, param1: string): number;
				public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
				public getAsShortText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
				public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
				public getDifference(param0: number, param1: number): number;
				public getName(): string;
				public toString(): string;
				public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
				public getLeapDurationField(): org.joda.time.DurationField;
				public isSupported(): boolean;
				public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
				public getMinimumValue(): number;
				public getType(): org.joda.time.DateTimeFieldType;
				public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
				public addWrapPartial(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
				public getAsShortText(param0: number): string;
				public getMaximumShortTextLength(param0: java.util.Locale): number;
				public isLeap(param0: number): boolean;
				public getDurationField(): org.joda.time.DurationField;
				public set(param0: number, param1: string, param2: java.util.Locale): number;
				public getRangeDurationField(): org.joda.time.DurationField;
				public remainder(param0: number): number;
				public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
				public roundHalfEven(param0: number): number;
				public getDifferenceAsLong(param0: number, param1: number): number;
				public getMaximumValue(): number;
				public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
				public getAsShortText(param0: number, param1: java.util.Locale): string;
				public getAsText(param0: number, param1: java.util.Locale): string;
				public roundFloor(param0: number): number;
				public getAsShortText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
				public addWrapField(param0: number, param1: number): number;
				public set(param0: number, param1: number): number;
				public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
				public getMaximumTextLength(param0: java.util.Locale): number;
				public getMaximumValue(param0: number): number;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export abstract class DateTimeFieldType extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.DateTimeFieldType>;
				public static millisOfDay(): org.joda.time.DateTimeFieldType;
				public static centuryOfEra(): org.joda.time.DateTimeFieldType;
				public getDurationType(): org.joda.time.DurationFieldType;
				public static yearOfCentury(): org.joda.time.DateTimeFieldType;
				public constructor(param0: string);
				public static weekyearOfCentury(): org.joda.time.DateTimeFieldType;
				public static minuteOfHour(): org.joda.time.DateTimeFieldType;
				public static minuteOfDay(): org.joda.time.DateTimeFieldType;
				public static secondOfDay(): org.joda.time.DateTimeFieldType;
				public static era(): org.joda.time.DateTimeFieldType;
				public static clockhourOfDay(): org.joda.time.DateTimeFieldType;
				public static dayOfYear(): org.joda.time.DateTimeFieldType;
				public static yearOfEra(): org.joda.time.DateTimeFieldType;
				public static secondOfMinute(): org.joda.time.DateTimeFieldType;
				public static weekyear(): org.joda.time.DateTimeFieldType;
				public static dayOfMonth(): org.joda.time.DateTimeFieldType;
				public static weekOfWeekyear(): org.joda.time.DateTimeFieldType;
				public static monthOfYear(): org.joda.time.DateTimeFieldType;
				public getName(): string;
				public static year(): org.joda.time.DateTimeFieldType;
				public toString(): string;
				public static hourOfHalfday(): org.joda.time.DateTimeFieldType;
				public static dayOfWeek(): org.joda.time.DateTimeFieldType;
				public static hourOfDay(): org.joda.time.DateTimeFieldType;
				public static halfdayOfDay(): org.joda.time.DateTimeFieldType;
				public getField(param0: org.joda.time.Chronology): org.joda.time.DateTimeField;
				public static millisOfSecond(): org.joda.time.DateTimeFieldType;
				public static clockhourOfHalfday(): org.joda.time.DateTimeFieldType;
				public getRangeDurationType(): org.joda.time.DurationFieldType;
				public isSupported(param0: org.joda.time.Chronology): boolean;
			}
			export module DateTimeFieldType {
				export class StandardDateTimeFieldType extends org.joda.time.DateTimeFieldType {
					public static class: java.lang.Class<org.joda.time.DateTimeFieldType.StandardDateTimeFieldType>;
					public getRangeDurationType(): org.joda.time.DurationFieldType;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public getDurationType(): org.joda.time.DurationFieldType;
					public getField(param0: org.joda.time.Chronology): org.joda.time.DateTimeField;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class DateTimeUtils extends java.lang.Object {
				public static class: java.lang.Class<org.joda.time.DateTimeUtils>;
				public static SYSTEM_MILLIS_PROVIDER: org.joda.time.DateTimeUtils.MillisProvider;
				public static currentTimeMillis(): number;
				public static getChronology(param0: org.joda.time.Chronology): org.joda.time.Chronology;
				public static setCurrentMillisFixed(param0: number): void;
				public static setCurrentMillisOffset(param0: number): void;
				public static toJulianDayNumber(param0: number): number;
				public static getDurationMillis(param0: org.joda.time.ReadableDuration): number;
				public static setCurrentMillisProvider(param0: org.joda.time.DateTimeUtils.MillisProvider): void;
				public static getIntervalChronology(param0: org.joda.time.ReadableInterval): org.joda.time.Chronology;
				public static getInstantMillis(param0: org.joda.time.ReadableInstant): number;
				public constructor();
				public static fromJulianDay(param0: number): number;
				public static isContiguous(param0: org.joda.time.ReadablePartial): boolean;
				public static setCurrentMillisSystem(): void;
				public static toJulianDay(param0: number): number;
				public static getInstantChronology(param0: org.joda.time.ReadableInstant): org.joda.time.Chronology;
				public static getDefaultTimeZoneNames(): java.util.Map<string,org.joda.time.DateTimeZone>;
				public static getReadableInterval(param0: org.joda.time.ReadableInterval): org.joda.time.ReadableInterval;
				public static getZone(param0: org.joda.time.DateTimeZone): org.joda.time.DateTimeZone;
				public static getPeriodType(param0: org.joda.time.PeriodType): org.joda.time.PeriodType;
				public static getDateFormatSymbols(param0: java.util.Locale): java.text.DateFormatSymbols;
				public static setDefaultTimeZoneNames(param0: java.util.Map<string,org.joda.time.DateTimeZone>): void;
				public static getIntervalChronology(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): org.joda.time.Chronology;
			}
			export module DateTimeUtils {
				export class FixedMillisProvider extends java.lang.Object implements org.joda.time.DateTimeUtils.MillisProvider {
					public static class: java.lang.Class<org.joda.time.DateTimeUtils.FixedMillisProvider>;
					public getMillis(): number;
				}
				export class MillisProvider extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.DateTimeUtils.MillisProvider>;
					/**
					 * Constructs a new instance of the org.joda.time.DateTimeUtils$MillisProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMillis(): number;
					});
					public constructor();
					public getMillis(): number;
				}
				export class OffsetMillisProvider extends java.lang.Object implements org.joda.time.DateTimeUtils.MillisProvider {
					public static class: java.lang.Class<org.joda.time.DateTimeUtils.OffsetMillisProvider>;
					public getMillis(): number;
				}
				export class SystemMillisProvider extends java.lang.Object implements org.joda.time.DateTimeUtils.MillisProvider {
					public static class: java.lang.Class<org.joda.time.DateTimeUtils.SystemMillisProvider>;
					public getMillis(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export abstract class DateTimeZone extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.DateTimeZone>;
				public static UTC: org.joda.time.DateTimeZone;
				public static DEFAULT_TZ_DATA_PATH: string;
				public static setDefault(param0: org.joda.time.DateTimeZone): void;
				public getOffsetFromLocal(param0: number): number;
				public static forOffsetHours(param0: number): org.joda.time.DateTimeZone;
				public getName(param0: number, param1: java.util.Locale): string;
				public constructor(param0: string);
				public getName(param0: number): string;
				public static getAvailableIDs(): java.util.Set<string>;
				public isStandardOffset(param0: number): boolean;
				public nextTransition(param0: number): number;
				public adjustOffset(param0: number, param1: boolean): number;
				public hashCode(): number;
				public static setNameProvider(param0: org.joda.time.tz.NameProvider): void;
				public getOffset(param0: org.joda.time.ReadableInstant): number;
				public equals(param0: any): boolean;
				public getMillisKeepLocal(param0: org.joda.time.DateTimeZone, param1: number): number;
				public static forOffsetMillis(param0: number): org.joda.time.DateTimeZone;
				public static setProvider(param0: org.joda.time.tz.Provider): void;
				public static getNameProvider(): org.joda.time.tz.NameProvider;
				public getShortName(param0: number, param1: java.util.Locale): string;
				public static forTimeZone(param0: java.util.TimeZone): org.joda.time.DateTimeZone;
				public getShortName(param0: number): string;
				public convertLocalToUTC(param0: number, param1: boolean): number;
				public toTimeZone(): java.util.TimeZone;
				public getNameKey(param0: number): string;
				public toString(): string;
				public writeReplace(): any;
				public convertLocalToUTC(param0: number, param1: boolean, param2: number): number;
				public static forOffsetHoursMinutes(param0: number, param1: number): org.joda.time.DateTimeZone;
				public isFixed(): boolean;
				public static forID(param0: string): org.joda.time.DateTimeZone;
				public convertUTCToLocal(param0: number): number;
				public equals(obj: any): boolean;
				public static getDefault(): org.joda.time.DateTimeZone;
				public static getProvider(): org.joda.time.tz.Provider;
				public previousTransition(param0: number): number;
				public isLocalDateTimeGap(param0: org.joda.time.LocalDateTime): boolean;
				public getStandardOffset(param0: number): number;
				public getID(): string;
				public getOffset(param0: number): number;
			}
			export module DateTimeZone {
				export class LazyInit extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.DateTimeZone.LazyInit>;
				}
				export class Stub extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.DateTimeZone.Stub>;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Days extends org.joda.time.base.BaseSingleFieldPeriod {
				public static class: java.lang.Class<org.joda.time.Days>;
				public static ZERO: org.joda.time.Days;
				public static ONE: org.joda.time.Days;
				public static TWO: org.joda.time.Days;
				public static THREE: org.joda.time.Days;
				public static FOUR: org.joda.time.Days;
				public static FIVE: org.joda.time.Days;
				public static SIX: org.joda.time.Days;
				public static SEVEN: org.joda.time.Days;
				public static MAX_VALUE: org.joda.time.Days;
				public static MIN_VALUE: org.joda.time.Days;
				public toStandardHours(): org.joda.time.Hours;
				public static days(param0: number): org.joda.time.Days;
				public toStandardDuration(): org.joda.time.Duration;
				public getPeriodType(): org.joda.time.PeriodType;
				public get(param0: org.joda.time.DurationFieldType): number;
				public toStandardWeeks(): org.joda.time.Weeks;
				public getValue(param0: number): number;
				public minus(param0: org.joda.time.Days): org.joda.time.Days;
				public multipliedBy(param0: number): org.joda.time.Days;
				public static daysBetween(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): org.joda.time.Days;
				public negated(): org.joda.time.Days;
				public isGreaterThan(param0: org.joda.time.Days): boolean;
				public toPeriod(): org.joda.time.Period;
				public plus(param0: org.joda.time.Days): org.joda.time.Days;
				public hashCode(): number;
				public toStandardMinutes(): org.joda.time.Minutes;
				public equals(param0: any): boolean;
				public static daysBetween(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial): org.joda.time.Days;
				public getValue(): number;
				public getFieldType(): org.joda.time.DurationFieldType;
				public isLessThan(param0: org.joda.time.Days): boolean;
				public plus(param0: number): org.joda.time.Days;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public static standardDaysIn(param0: org.joda.time.ReadablePeriod): org.joda.time.Days;
				public static daysIn(param0: org.joda.time.ReadableInterval): org.joda.time.Days;
				public toString(): string;
				public minus(param0: number): org.joda.time.Days;
				public size(): number;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public dividedBy(param0: number): org.joda.time.Days;
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public getDays(): number;
				public toStandardSeconds(): org.joda.time.Seconds;
				public static parseDays(param0: string): org.joda.time.Days;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Duration extends org.joda.time.base.BaseDuration implements org.joda.time.ReadableDuration, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.Duration>;
				public static ZERO: org.joda.time.Duration;
				public constructor(param0: number, param1: number);
				public toStandardHours(): org.joda.time.Hours;
				public toDuration(): org.joda.time.Duration;
				public static parse(param0: string): org.joda.time.Duration;
				public abs(): org.joda.time.Duration;
				public withMillis(param0: number): org.joda.time.Duration;
				public plus(param0: org.joda.time.ReadableDuration): org.joda.time.Duration;
				public getStandardHours(): number;
				public static standardSeconds(param0: number): org.joda.time.Duration;
				public constructor();
				public minus(param0: number): org.joda.time.Duration;
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant);
				public toPeriod(): org.joda.time.Period;
				public isEqual(param0: org.joda.time.ReadableDuration): boolean;
				public hashCode(): number;
				public negated(): org.joda.time.Duration;
				public toStandardMinutes(): org.joda.time.Minutes;
				public equals(param0: any): boolean;
				public withDurationAdded(param0: org.joda.time.ReadableDuration, param1: number): org.joda.time.Duration;
				public toPeriod(param0: org.joda.time.Chronology): org.joda.time.Period;
				public getMillis(): number;
				public withDurationAdded(param0: number, param1: number): org.joda.time.Duration;
				public getStandardMinutes(): number;
				public toString(): string;
				public getStandardSeconds(): number;
				public isLongerThan(param0: org.joda.time.ReadableDuration): boolean;
				public toPeriod(param0: org.joda.time.PeriodType): org.joda.time.Period;
				public static standardDays(param0: number): org.joda.time.Duration;
				public static standardHours(param0: number): org.joda.time.Duration;
				public static standardMinutes(param0: number): org.joda.time.Duration;
				public dividedBy(param0: number, param1: java.math.RoundingMode): org.joda.time.Duration;
				public multipliedBy(param0: number): org.joda.time.Duration;
				public plus(param0: number): org.joda.time.Duration;
				public toPeriod(param0: org.joda.time.PeriodType, param1: org.joda.time.Chronology): org.joda.time.Period;
				public constructor(param0: number);
				public isShorterThan(param0: org.joda.time.ReadableDuration): boolean;
				public constructor(param0: any);
				public minus(param0: org.joda.time.ReadableDuration): org.joda.time.Duration;
				public getStandardDays(): number;
				public toStandardDays(): org.joda.time.Days;
				public toStandardSeconds(): org.joda.time.Seconds;
				public static millis(param0: number): org.joda.time.Duration;
				public dividedBy(param0: number): org.joda.time.Duration;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export abstract class DurationField extends java.lang.Comparable<org.joda.time.DurationField> {
				public static class: java.lang.Class<org.joda.time.DurationField>;
				public add(param0: number, param1: number): number;
				public getType(): org.joda.time.DurationFieldType;
				public getMillis(param0: number): number;
				public getDifference(param0: number, param1: number): number;
				public getDifferenceAsLong(param0: number, param1: number): number;
				public getName(): string;
				public getValue(param0: number): number;
				public getValueAsLong(param0: number): number;
				public toString(): string;
				public constructor();
				public isSupported(): boolean;
				public getValue(param0: number, param1: number): number;
				public getMillis(param0: number, param1: number): number;
				public getUnitMillis(): number;
				public getValueAsLong(param0: number, param1: number): number;
				public isPrecise(): boolean;
				public subtract(param0: number, param1: number): number;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export abstract class DurationFieldType extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.DurationFieldType>;
				public static weeks(): org.joda.time.DurationFieldType;
				public getField(param0: org.joda.time.Chronology): org.joda.time.DurationField;
				public static months(): org.joda.time.DurationFieldType;
				public static halfdays(): org.joda.time.DurationFieldType;
				public static days(): org.joda.time.DurationFieldType;
				public getName(): string;
				public toString(): string;
				public constructor(param0: string);
				public static seconds(): org.joda.time.DurationFieldType;
				public static minutes(): org.joda.time.DurationFieldType;
				public static hours(): org.joda.time.DurationFieldType;
				public static weekyears(): org.joda.time.DurationFieldType;
				public static years(): org.joda.time.DurationFieldType;
				public static eras(): org.joda.time.DurationFieldType;
				public static millis(): org.joda.time.DurationFieldType;
				public isSupported(param0: org.joda.time.Chronology): boolean;
				public static centuries(): org.joda.time.DurationFieldType;
			}
			export module DurationFieldType {
				export class StandardDurationFieldType extends org.joda.time.DurationFieldType {
					public static class: java.lang.Class<org.joda.time.DurationFieldType.StandardDurationFieldType>;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public hashCode(): number;
					public getField(param0: org.joda.time.Chronology): org.joda.time.DurationField;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Hours extends org.joda.time.base.BaseSingleFieldPeriod {
				public static class: java.lang.Class<org.joda.time.Hours>;
				public static ZERO: org.joda.time.Hours;
				public static ONE: org.joda.time.Hours;
				public static TWO: org.joda.time.Hours;
				public static THREE: org.joda.time.Hours;
				public static FOUR: org.joda.time.Hours;
				public static FIVE: org.joda.time.Hours;
				public static SIX: org.joda.time.Hours;
				public static SEVEN: org.joda.time.Hours;
				public static EIGHT: org.joda.time.Hours;
				public static MAX_VALUE: org.joda.time.Hours;
				public static MIN_VALUE: org.joda.time.Hours;
				public toStandardDuration(): org.joda.time.Duration;
				public getPeriodType(): org.joda.time.PeriodType;
				public get(param0: org.joda.time.DurationFieldType): number;
				public toStandardWeeks(): org.joda.time.Weeks;
				public getValue(param0: number): number;
				public multipliedBy(param0: number): org.joda.time.Hours;
				public isLessThan(param0: org.joda.time.Hours): boolean;
				public static standardHoursIn(param0: org.joda.time.ReadablePeriod): org.joda.time.Hours;
				public toPeriod(): org.joda.time.Period;
				public hashCode(): number;
				public static hoursBetween(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): org.joda.time.Hours;
				public toStandardMinutes(): org.joda.time.Minutes;
				public equals(param0: any): boolean;
				public getValue(): number;
				public getFieldType(): org.joda.time.DurationFieldType;
				public dividedBy(param0: number): org.joda.time.Hours;
				public static parseHours(param0: string): org.joda.time.Hours;
				public minus(param0: number): org.joda.time.Hours;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public static hoursIn(param0: org.joda.time.ReadableInterval): org.joda.time.Hours;
				public plus(param0: number): org.joda.time.Hours;
				public negated(): org.joda.time.Hours;
				public static hours(param0: number): org.joda.time.Hours;
				public toString(): string;
				public size(): number;
				public isGreaterThan(param0: org.joda.time.Hours): boolean;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public minus(param0: org.joda.time.Hours): org.joda.time.Hours;
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public static hoursBetween(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial): org.joda.time.Hours;
				public toStandardDays(): org.joda.time.Days;
				public toStandardSeconds(): org.joda.time.Seconds;
				public getHours(): number;
				public plus(param0: org.joda.time.Hours): org.joda.time.Hours;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class IllegalFieldValueException extends java.lang.IllegalArgumentException {
				public static class: java.lang.Class<org.joda.time.IllegalFieldValueException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(param0: org.joda.time.DateTimeFieldType, param1: java.lang.Number, param2: java.lang.Number, param3: java.lang.Number);
				public getFieldName(): string;
				public constructor(message: string, cause: java.lang.Throwable);
				public getDateTimeFieldType(): org.joda.time.DateTimeFieldType;
				public constructor(param0: org.joda.time.DateTimeFieldType, param1: java.lang.Number, param2: string);
				public constructor(param0: org.joda.time.DurationFieldType, param1: java.lang.Number, param2: java.lang.Number, param3: java.lang.Number);
				public getIllegalStringValue(): string;
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public getDurationFieldType(): org.joda.time.DurationFieldType;
				public constructor(param0: org.joda.time.DurationFieldType, param1: string);
				public getLowerBound(): java.lang.Number;
				public constructor();
				public prependMessage(param0: string): void;
				public constructor(s: string);
				public constructor(param0: org.joda.time.DateTimeFieldType, param1: string);
				public getIllegalNumberValue(): java.lang.Number;
				public constructor(param0: org.joda.time.DateTimeFieldType, param1: java.lang.Number, param2: java.lang.Number, param3: java.lang.Number, param4: string);
				public getIllegalValueAsString(): string;
				public getMessage(): string;
				public constructor(param0: string, param1: string);
				public getUpperBound(): java.lang.Number;
				public constructor(param0: string, param1: java.lang.Number, param2: java.lang.Number, param3: java.lang.Number);
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class IllegalInstantException extends java.lang.IllegalArgumentException {
				public static class: java.lang.Class<org.joda.time.IllegalInstantException>;
				public constructor(s: string);
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(param0: number, param1: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public static isIllegalInstant(param0: java.lang.Throwable): boolean;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Instant extends org.joda.time.base.AbstractInstant implements org.joda.time.ReadableInstant, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.Instant>;
				public static EPOCH: org.joda.time.Instant;
				/** @deprecated */
				public toDateTimeISO(): org.joda.time.DateTime;
				public getZone(): org.joda.time.DateTimeZone;
				public toInstant(): org.joda.time.Instant;
				public toMutableDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.MutableDateTime;
				public isEqual(param0: number): boolean;
				public static parse(param0: string, param1: org.joda.time.format.DateTimeFormatter): org.joda.time.Instant;
				public toDateTime(): org.joda.time.DateTime;
				public toDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public withDurationAdded(param0: number, param1: number): org.joda.time.Instant;
				public constructor();
				public getChronology(): org.joda.time.Chronology;
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public minus(param0: number): org.joda.time.Instant;
				public toMutableDateTime(param0: org.joda.time.Chronology): org.joda.time.MutableDateTime;
				public minus(param0: org.joda.time.ReadableDuration): org.joda.time.Instant;
				public toMutableDateTimeISO(): org.joda.time.MutableDateTime;
				public hashCode(): number;
				public plus(param0: number): org.joda.time.Instant;
				public equals(param0: any): boolean;
				public toDateTimeISO(): org.joda.time.DateTime;
				/** @deprecated */
				public toMutableDateTimeISO(): org.joda.time.MutableDateTime;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public plus(param0: org.joda.time.ReadableDuration): org.joda.time.Instant;
				public getMillis(): number;
				public isAfter(param0: number): boolean;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public isEqual(param0: org.joda.time.ReadableInstant): boolean;
				public static now(): org.joda.time.Instant;
				public static parse(param0: string): org.joda.time.Instant;
				public withDurationAdded(param0: org.joda.time.ReadableDuration, param1: number): org.joda.time.Instant;
				public withMillis(param0: number): org.joda.time.Instant;
				public get(param0: org.joda.time.DateTimeField): number;
				public toDateTime(param0: org.joda.time.Chronology): org.joda.time.DateTime;
				public static ofEpochMilli(param0: number): org.joda.time.Instant;
				public toString(): string;
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public toMutableDateTime(): org.joda.time.MutableDateTime;
				public constructor(param0: number);
				public isBefore(param0: number): boolean;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public static ofEpochSecond(param0: number): org.joda.time.Instant;
				public constructor(param0: any);
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Interval extends org.joda.time.base.BaseInterval implements org.joda.time.ReadableInterval, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.Interval>;
				public constructor(param0: number, param1: number);
				public constructor(param0: org.joda.time.ReadablePeriod, param1: org.joda.time.ReadableInstant);
				public withEndMillis(param0: number): org.joda.time.Interval;
				public constructor(param0: number, param1: number, param2: org.joda.time.Chronology);
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public static parse(param0: string): org.joda.time.Interval;
				public constructor();
				public constructor(param0: number, param1: number, param2: org.joda.time.DateTimeZone);
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant);
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableDuration);
				public withPeriodBeforeEnd(param0: org.joda.time.ReadablePeriod): org.joda.time.Interval;
				public toPeriod(): org.joda.time.Period;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public abuts(param0: org.joda.time.ReadableInterval): boolean;
				public overlaps(param0: org.joda.time.ReadableInterval): boolean;
				public withPeriodAfterStart(param0: org.joda.time.ReadablePeriod): org.joda.time.Interval;
				public isAfter(param0: number): boolean;
				public getEndMillis(): number;
				public withEnd(param0: org.joda.time.ReadableInstant): org.joda.time.Interval;
				public contains(param0: org.joda.time.ReadableInstant): boolean;
				public toInterval(): org.joda.time.Interval;
				public isAfter(param0: org.joda.time.ReadableInterval): boolean;
				public contains(param0: org.joda.time.ReadableInterval): boolean;
				public toString(): string;
				public withChronology(param0: org.joda.time.Chronology): org.joda.time.Interval;
				public contains(param0: number): boolean;
				public gap(param0: org.joda.time.ReadableInterval): org.joda.time.Interval;
				public withStart(param0: org.joda.time.ReadableInstant): org.joda.time.Interval;
				public getStart(): org.joda.time.DateTime;
				public isBefore(param0: number): boolean;
				public constructor(param0: any);
				public isBefore(param0: org.joda.time.ReadableInterval): boolean;
				public withStartMillis(param0: number): org.joda.time.Interval;
				public toDuration(): org.joda.time.Duration;
				public static parseWithOffset(param0: string): org.joda.time.Interval;
				public getChronology(): org.joda.time.Chronology;
				public withDurationAfterStart(param0: org.joda.time.ReadableDuration): org.joda.time.Interval;
				public withDurationBeforeEnd(param0: org.joda.time.ReadableDuration): org.joda.time.Interval;
				public getStartMillis(): number;
				public overlap(param0: org.joda.time.ReadableInterval): org.joda.time.Interval;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public getEnd(): org.joda.time.DateTime;
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadablePeriod);
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public toPeriod(param0: org.joda.time.PeriodType): org.joda.time.Period;
				public toDurationMillis(): number;
				public constructor(param0: org.joda.time.ReadableDuration, param1: org.joda.time.ReadableInstant);
				public toMutableInterval(): org.joda.time.MutableInterval;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class JodaTimePermission extends java.security.BasicPermission {
				public static class: java.lang.Class<org.joda.time.JodaTimePermission>;
				public constructor(name: string);
				public checkGuard(param0: any): void;
				public checkGuard(object: any): void;
				public constructor(name: string, actions: string);
				public constructor(param0: string);
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class LocalDate extends org.joda.time.base.BaseLocal implements org.joda.time.ReadablePartial, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.LocalDate>;
				public toInterval(param0: org.joda.time.DateTimeZone): org.joda.time.Interval;
				public withDayOfWeek(param0: number): org.joda.time.LocalDate;
				public static parse(param0: string): org.joda.time.LocalDate;
				public withDayOfYear(param0: number): org.joda.time.LocalDate;
				public getYearOfCentury(): number;
				public withYearOfEra(param0: number): org.joda.time.LocalDate;
				public getDayOfWeek(): number;
				public constructor(param0: number, param1: number, param2: number, param3: org.joda.time.Chronology);
				public minusWeeks(param0: number): org.joda.time.LocalDate;
				public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
				public getCenturyOfEra(): number;
				public constructor(param0: any, param1: org.joda.time.DateTimeZone);
				public constructor(param0: number, param1: org.joda.time.Chronology);
				/** @deprecated */
				public toDateTimeAtMidnight(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public toDate(): java.util.Date;
				public size(): number;
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.LocalDate;
				public static parse(param0: string, param1: org.joda.time.format.DateTimeFormatter): org.joda.time.LocalDate;
				public compareTo(param0: org.joda.time.ReadablePartial): number;
				public withEra(param0: number): org.joda.time.LocalDate;
				public dayOfYear(): org.joda.time.LocalDate.Property;
				public constructor(param0: org.joda.time.DateTimeZone);
				public toDateTime(param0: org.joda.time.LocalTime, param1: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public yearOfCentury(): org.joda.time.LocalDate.Property;
				public minusMonths(param0: number): org.joda.time.LocalDate;
				public constructor(param0: org.joda.time.Chronology);
				public getField(param0: number): org.joda.time.DateTimeField;
				public getYear(): number;
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public toDateTimeAtCurrentTime(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public getWeekOfWeekyear(): number;
				public toLocalDateTime(param0: org.joda.time.LocalTime): org.joda.time.LocalDateTime;
				public toDateTimeAtCurrentTime(): org.joda.time.DateTime;
				public toDateTime(param0: org.joda.time.LocalTime): org.joda.time.DateTime;
				public static fromDateFields(param0: java.util.Date): org.joda.time.LocalDate;
				public withMonthOfYear(param0: number): org.joda.time.LocalDate;
				public withYearOfCentury(param0: number): org.joda.time.LocalDate;
				public minusDays(param0: number): org.joda.time.LocalDate;
				public constructor(param0: number, param1: org.joda.time.DateTimeZone);
				public yearOfEra(): org.joda.time.LocalDate.Property;
				public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				public getEra(): number;
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.LocalDate;
				public dayOfMonth(): org.joda.time.LocalDate.Property;
				public withCenturyOfEra(param0: number): org.joda.time.LocalDate;
				public toString(param0: string): string;
				/** @deprecated */
				public toDateMidnight(param0: org.joda.time.DateTimeZone): org.joda.time.DateMidnight;
				public constructor(param0: number);
				/** @deprecated */
				public toDateMidnight(): org.joda.time.DateMidnight;
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.LocalDate.Property;
				public getValue(param0: number): number;
				public getLocalMillis(): number;
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public static now(param0: org.joda.time.DateTimeZone): org.joda.time.LocalDate;
				public withFields(param0: org.joda.time.ReadablePartial): org.joda.time.LocalDate;
				public year(): org.joda.time.LocalDate.Property;
				public monthOfYear(): org.joda.time.LocalDate.Property;
				public hashCode(): number;
				public withField(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.LocalDate;
				public equals(param0: any): boolean;
				public withWeekyear(param0: number): org.joda.time.LocalDate;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public toString(param0: string, param1: java.util.Locale): string;
				public getYearOfEra(): number;
				public getMonthOfYear(): number;
				public toDateTimeAtStartOfDay(): org.joda.time.DateTime;
				public withYear(param0: number): org.joda.time.LocalDate;
				public toInterval(): org.joda.time.Interval;
				public weekOfWeekyear(): org.joda.time.LocalDate.Property;
				public era(): org.joda.time.LocalDate.Property;
				public toString(): string;
				public plusMonths(param0: number): org.joda.time.LocalDate;
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.LocalDate;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public plusDays(param0: number): org.joda.time.LocalDate;
				public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
				public getDayOfYear(): number;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public toDateTimeAtStartOfDay(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public weekyear(): org.joda.time.LocalDate.Property;
				public constructor(param0: any);
				public getWeekyear(): number;
				public constructor(param0: number, param1: number, param2: number);
				public withDayOfMonth(param0: number): org.joda.time.LocalDate;
				public withPeriodAdded(param0: org.joda.time.ReadablePeriod, param1: number): org.joda.time.LocalDate;
				public getDayOfMonth(): number;
				public static now(param0: org.joda.time.Chronology): org.joda.time.LocalDate;
				public dayOfWeek(): org.joda.time.LocalDate.Property;
				public getChronology(): org.joda.time.Chronology;
				public static now(): org.joda.time.LocalDate;
				public minusYears(param0: number): org.joda.time.LocalDate;
				public static fromCalendarFields(param0: java.util.Calendar): org.joda.time.LocalDate;
				public withWeekOfWeekyear(param0: number): org.joda.time.LocalDate;
				public centuryOfEra(): org.joda.time.LocalDate.Property;
				/** @deprecated */
				public toDateTimeAtMidnight(): org.joda.time.DateTime;
				public plusWeeks(param0: number): org.joda.time.LocalDate;
				public plusYears(param0: number): org.joda.time.LocalDate;
			}
			export module LocalDate {
				export class Property extends org.joda.time.field.AbstractReadableInstantFieldProperty {
					public static class: java.lang.Class<org.joda.time.LocalDate.Property>;
					public roundHalfFloorCopy(): org.joda.time.LocalDate;
					public roundHalfCeilingCopy(): org.joda.time.LocalDate;
					public withMaximumValue(): org.joda.time.LocalDate;
					public getLocalDate(): org.joda.time.LocalDate;
					public withMinimumValue(): org.joda.time.LocalDate;
					public roundHalfEvenCopy(): org.joda.time.LocalDate;
					public addToCopy(param0: number): org.joda.time.LocalDate;
					public roundFloorCopy(): org.joda.time.LocalDate;
					public getField(): org.joda.time.DateTimeField;
					public roundCeilingCopy(): org.joda.time.LocalDate;
					public setCopy(param0: string): org.joda.time.LocalDate;
					public addWrapFieldToCopy(param0: number): org.joda.time.LocalDate;
					public setCopy(param0: string, param1: java.util.Locale): org.joda.time.LocalDate;
					public getMillis(): number;
					public setCopy(param0: number): org.joda.time.LocalDate;
					public getChronology(): org.joda.time.Chronology;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class LocalDateTime extends org.joda.time.base.BaseLocal implements org.joda.time.ReadablePartial, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.LocalDateTime>;
				public withPeriodAdded(param0: org.joda.time.ReadablePeriod, param1: number): org.joda.time.LocalDateTime;
				public static now(param0: org.joda.time.Chronology): org.joda.time.LocalDateTime;
				public getYearOfCentury(): number;
				public toDateTime(): org.joda.time.DateTime;
				public minusMinutes(param0: number): org.joda.time.LocalDateTime;
				public getDayOfWeek(): number;
				public dayOfYear(): org.joda.time.LocalDateTime.Property;
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.LocalDateTime;
				public withCenturyOfEra(param0: number): org.joda.time.LocalDateTime;
				public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
				public plusDays(param0: number): org.joda.time.LocalDateTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
				public withYear(param0: number): org.joda.time.LocalDateTime;
				public getCenturyOfEra(): number;
				public withMillisOfSecond(param0: number): org.joda.time.LocalDateTime;
				public constructor(param0: any, param1: org.joda.time.DateTimeZone);
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public minusDays(param0: number): org.joda.time.LocalDateTime;
				public toDate(): java.util.Date;
				public size(): number;
				public withHourOfDay(param0: number): org.joda.time.LocalDateTime;
				public getMillisOfDay(): number;
				public monthOfYear(): org.joda.time.LocalDateTime.Property;
				public static parse(param0: string, param1: org.joda.time.format.DateTimeFormatter): org.joda.time.LocalDateTime;
				public compareTo(param0: org.joda.time.ReadablePartial): number;
				public withWeekyear(param0: number): org.joda.time.LocalDateTime;
				public static fromDateFields(param0: java.util.Date): org.joda.time.LocalDateTime;
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.LocalDateTime.Property;
				public constructor(param0: org.joda.time.DateTimeZone);
				public plusMillis(param0: number): org.joda.time.LocalDateTime;
				public getMinuteOfHour(): number;
				public constructor(param0: org.joda.time.Chronology);
				public getField(param0: number): org.joda.time.DateTimeField;
				public getYear(): number;
				public toDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public dayOfWeek(): org.joda.time.LocalDateTime.Property;
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public plusWeeks(param0: number): org.joda.time.LocalDateTime;
				public plus(param0: org.joda.time.ReadableDuration): org.joda.time.LocalDateTime;
				public getWeekOfWeekyear(): number;
				public toDate(param0: java.util.TimeZone): java.util.Date;
				public static parse(param0: string): org.joda.time.LocalDateTime;
				public withFields(param0: org.joda.time.ReadablePartial): org.joda.time.LocalDateTime;
				public minusSeconds(param0: number): org.joda.time.LocalDateTime;
				public withMillisOfDay(param0: number): org.joda.time.LocalDateTime;
				public constructor(param0: number, param1: org.joda.time.DateTimeZone);
				public withWeekOfWeekyear(param0: number): org.joda.time.LocalDateTime;
				public plusYears(param0: number): org.joda.time.LocalDateTime;
				public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				public getEra(): number;
				public plusMonths(param0: number): org.joda.time.LocalDateTime;
				public getMillisOfSecond(): number;
				public toString(param0: string): string;
				public minus(param0: org.joda.time.ReadableDuration): org.joda.time.LocalDateTime;
				public constructor(param0: number);
				public minusHours(param0: number): org.joda.time.LocalDateTime;
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.LocalDateTime;
				public yearOfEra(): org.joda.time.LocalDateTime.Property;
				public minuteOfHour(): org.joda.time.LocalDateTime.Property;
				public millisOfDay(): org.joda.time.LocalDateTime.Property;
				public getValue(param0: number): number;
				public weekyear(): org.joda.time.LocalDateTime.Property;
				public getLocalMillis(): number;
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public static now(param0: org.joda.time.DateTimeZone): org.joda.time.LocalDateTime;
				public getHourOfDay(): number;
				public withMinuteOfHour(param0: number): org.joda.time.LocalDateTime;
				public withField(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.LocalDateTime;
				public year(): org.joda.time.LocalDateTime.Property;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public withDate(param0: number, param1: number, param2: number): org.joda.time.LocalDateTime;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public hourOfDay(): org.joda.time.LocalDateTime.Property;
				public toString(param0: string, param1: java.util.Locale): string;
				public getYearOfEra(): number;
				public getMonthOfYear(): number;
				public toLocalTime(): org.joda.time.LocalTime;
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.LocalDateTime;
				public withDurationAdded(param0: org.joda.time.ReadableDuration, param1: number): org.joda.time.LocalDateTime;
				public toString(): string;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
				public centuryOfEra(): org.joda.time.LocalDateTime.Property;
				public static now(): org.joda.time.LocalDateTime;
				public getDayOfYear(): number;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public plusSeconds(param0: number): org.joda.time.LocalDateTime;
				public constructor(param0: any);
				public getWeekyear(): number;
				public withEra(param0: number): org.joda.time.LocalDateTime;
				public withSecondOfMinute(param0: number): org.joda.time.LocalDateTime;
				public plusHours(param0: number): org.joda.time.LocalDateTime;
				public getDayOfMonth(): number;
				public getSecondOfMinute(): number;
				public withMonthOfYear(param0: number): org.joda.time.LocalDateTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
				public minusWeeks(param0: number): org.joda.time.LocalDateTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: org.joda.time.Chronology);
				public minusMillis(param0: number): org.joda.time.LocalDateTime;
				public getChronology(): org.joda.time.Chronology;
				public plusMinutes(param0: number): org.joda.time.LocalDateTime;
				public millisOfSecond(): org.joda.time.LocalDateTime.Property;
				public era(): org.joda.time.LocalDateTime.Property;
				public yearOfCentury(): org.joda.time.LocalDateTime.Property;
				public weekOfWeekyear(): org.joda.time.LocalDateTime.Property;
				public minusYears(param0: number): org.joda.time.LocalDateTime;
				public dayOfMonth(): org.joda.time.LocalDateTime.Property;
				public withDayOfMonth(param0: number): org.joda.time.LocalDateTime;
				public minusMonths(param0: number): org.joda.time.LocalDateTime;
				public withDayOfWeek(param0: number): org.joda.time.LocalDateTime;
				public static fromCalendarFields(param0: java.util.Calendar): org.joda.time.LocalDateTime;
				public withTime(param0: number, param1: number, param2: number, param3: number): org.joda.time.LocalDateTime;
				public withYearOfEra(param0: number): org.joda.time.LocalDateTime;
				public toLocalDate(): org.joda.time.LocalDate;
				public withYearOfCentury(param0: number): org.joda.time.LocalDateTime;
				public secondOfMinute(): org.joda.time.LocalDateTime.Property;
				public withDayOfYear(param0: number): org.joda.time.LocalDateTime;
			}
			export module LocalDateTime {
				export class Property extends org.joda.time.field.AbstractReadableInstantFieldProperty {
					public static class: java.lang.Class<org.joda.time.LocalDateTime.Property>;
					public withMaximumValue(): org.joda.time.LocalDateTime;
					public setCopy(param0: string, param1: java.util.Locale): org.joda.time.LocalDateTime;
					public roundHalfEvenCopy(): org.joda.time.LocalDateTime;
					public setCopy(param0: number): org.joda.time.LocalDateTime;
					public withMinimumValue(): org.joda.time.LocalDateTime;
					public roundCeilingCopy(): org.joda.time.LocalDateTime;
					public addWrapFieldToCopy(param0: number): org.joda.time.LocalDateTime;
					public getField(): org.joda.time.DateTimeField;
					public roundFloorCopy(): org.joda.time.LocalDateTime;
					public roundHalfCeilingCopy(): org.joda.time.LocalDateTime;
					public getMillis(): number;
					public addToCopy(param0: number): org.joda.time.LocalDateTime;
					public setCopy(param0: string): org.joda.time.LocalDateTime;
					public roundHalfFloorCopy(): org.joda.time.LocalDateTime;
					public getLocalDateTime(): org.joda.time.LocalDateTime;
					public getChronology(): org.joda.time.Chronology;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class LocalTime extends org.joda.time.base.BaseLocal implements org.joda.time.ReadablePartial, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.LocalTime>;
				public static MIDNIGHT: org.joda.time.LocalTime;
				public constructor(param0: number, param1: number);
				public withSecondOfMinute(param0: number): org.joda.time.LocalTime;
				public static now(): org.joda.time.LocalTime;
				public plusMinutes(param0: number): org.joda.time.LocalTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: org.joda.time.Chronology);
				public minusHours(param0: number): org.joda.time.LocalTime;
				public withMinuteOfHour(param0: number): org.joda.time.LocalTime;
				public getValue(param0: number): number;
				public getLocalMillis(): number;
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public getHourOfDay(): number;
				public minusMillis(param0: number): org.joda.time.LocalTime;
				public hashCode(): number;
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.LocalTime;
				public equals(param0: any): boolean;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public toString(param0: string, param1: java.util.Locale): string;
				public static parse(param0: string, param1: org.joda.time.format.DateTimeFormatter): org.joda.time.LocalTime;
				public static fromMillisOfDay(param0: number): org.joda.time.LocalTime;
				public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
				public millisOfSecond(): org.joda.time.LocalTime.Property;
				public constructor(param0: any, param1: org.joda.time.DateTimeZone);
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public toString(): string;
				public size(): number;
				public static now(param0: org.joda.time.DateTimeZone): org.joda.time.LocalTime;
				public static fromMillisOfDay(param0: number, param1: org.joda.time.Chronology): org.joda.time.LocalTime;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public getMillisOfDay(): number;
				public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
				public compareTo(param0: org.joda.time.ReadablePartial): number;
				public static fromCalendarFields(param0: java.util.Calendar): org.joda.time.LocalTime;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public plusHours(param0: number): org.joda.time.LocalTime;
				public toDateTimeToday(): org.joda.time.DateTime;
				public constructor(param0: any);
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.joda.time.DateTimeZone);
				public withHourOfDay(param0: number): org.joda.time.LocalTime;
				public getSecondOfMinute(): number;
				public getMinuteOfHour(): number;
				public constructor(param0: org.joda.time.Chronology);
				public getField(param0: number): org.joda.time.DateTimeField;
				public getChronology(): org.joda.time.Chronology;
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public minusMinutes(param0: number): org.joda.time.LocalTime;
				public withMillisOfDay(param0: number): org.joda.time.LocalTime;
				public toDateTimeToday(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.LocalTime;
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.LocalTime;
				public plusMillis(param0: number): org.joda.time.LocalTime;
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.LocalTime.Property;
				public secondOfMinute(): org.joda.time.LocalTime.Property;
				public minusSeconds(param0: number): org.joda.time.LocalTime;
				public hourOfDay(): org.joda.time.LocalTime.Property;
				public withPeriodAdded(param0: org.joda.time.ReadablePeriod, param1: number): org.joda.time.LocalTime;
				public withFields(param0: org.joda.time.ReadablePartial): org.joda.time.LocalTime;
				public constructor(param0: number, param1: org.joda.time.DateTimeZone);
				public static parse(param0: string): org.joda.time.LocalTime;
				public static now(param0: org.joda.time.Chronology): org.joda.time.LocalTime;
				public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				public withMillisOfSecond(param0: number): org.joda.time.LocalTime;
				public millisOfDay(): org.joda.time.LocalTime.Property;
				public getMillisOfSecond(): number;
				public static fromDateFields(param0: java.util.Date): org.joda.time.LocalTime;
				public plusSeconds(param0: number): org.joda.time.LocalTime;
				public toString(param0: string): string;
				public constructor(param0: number);
				public minuteOfHour(): org.joda.time.LocalTime.Property;
				public withField(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.LocalTime;
			}
			export module LocalTime {
				export class Property extends org.joda.time.field.AbstractReadableInstantFieldProperty {
					public static class: java.lang.Class<org.joda.time.LocalTime.Property>;
					public roundHalfCeilingCopy(): org.joda.time.LocalTime;
					public withMaximumValue(): org.joda.time.LocalTime;
					public setCopy(param0: number): org.joda.time.LocalTime;
					public roundHalfFloorCopy(): org.joda.time.LocalTime;
					public roundHalfEvenCopy(): org.joda.time.LocalTime;
					public setCopy(param0: string, param1: java.util.Locale): org.joda.time.LocalTime;
					public addCopy(param0: number): org.joda.time.LocalTime;
					public getLocalTime(): org.joda.time.LocalTime;
					public setCopy(param0: string): org.joda.time.LocalTime;
					public getField(): org.joda.time.DateTimeField;
					public roundCeilingCopy(): org.joda.time.LocalTime;
					public getMillis(): number;
					public roundFloorCopy(): org.joda.time.LocalTime;
					public addNoWrapToCopy(param0: number): org.joda.time.LocalTime;
					public addWrapFieldToCopy(param0: number): org.joda.time.LocalTime;
					public withMinimumValue(): org.joda.time.LocalTime;
					public getChronology(): org.joda.time.Chronology;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Minutes extends org.joda.time.base.BaseSingleFieldPeriod {
				public static class: java.lang.Class<org.joda.time.Minutes>;
				public static ZERO: org.joda.time.Minutes;
				public static ONE: org.joda.time.Minutes;
				public static TWO: org.joda.time.Minutes;
				public static THREE: org.joda.time.Minutes;
				public static MAX_VALUE: org.joda.time.Minutes;
				public static MIN_VALUE: org.joda.time.Minutes;
				public toStandardHours(): org.joda.time.Hours;
				public toStandardDuration(): org.joda.time.Duration;
				public isLessThan(param0: org.joda.time.Minutes): boolean;
				public getPeriodType(): org.joda.time.PeriodType;
				public get(param0: org.joda.time.DurationFieldType): number;
				public toStandardWeeks(): org.joda.time.Weeks;
				public static minutesBetween(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial): org.joda.time.Minutes;
				public getValue(param0: number): number;
				public plus(param0: org.joda.time.Minutes): org.joda.time.Minutes;
				public toPeriod(): org.joda.time.Period;
				public getMinutes(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public minus(param0: org.joda.time.Minutes): org.joda.time.Minutes;
				public dividedBy(param0: number): org.joda.time.Minutes;
				public getValue(): number;
				public getFieldType(): org.joda.time.DurationFieldType;
				public static standardMinutesIn(param0: org.joda.time.ReadablePeriod): org.joda.time.Minutes;
				public minus(param0: number): org.joda.time.Minutes;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public static minutesBetween(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): org.joda.time.Minutes;
				public negated(): org.joda.time.Minutes;
				public static minutes(param0: number): org.joda.time.Minutes;
				public multipliedBy(param0: number): org.joda.time.Minutes;
				public toString(): string;
				public size(): number;
				public static parseMinutes(param0: string): org.joda.time.Minutes;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public isGreaterThan(param0: org.joda.time.Minutes): boolean;
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public static minutesIn(param0: org.joda.time.ReadableInterval): org.joda.time.Minutes;
				public plus(param0: number): org.joda.time.Minutes;
				public toStandardDays(): org.joda.time.Days;
				public toStandardSeconds(): org.joda.time.Seconds;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class MonthDay extends org.joda.time.base.BasePartial implements org.joda.time.ReadablePartial, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.MonthDay>;
				public static MONTH_OF_YEAR: number;
				public static DAY_OF_MONTH: number;
				public constructor(param0: number, param1: number);
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.MonthDay;
				public getValue(param0: number): number;
				public static parse(param0: string, param1: org.joda.time.format.DateTimeFormatter): org.joda.time.MonthDay;
				public constructor(param0: number, param1: number, param2: org.joda.time.Chronology);
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public hashCode(): number;
				public equals(param0: any): boolean;
				public static now(param0: org.joda.time.DateTimeZone): org.joda.time.MonthDay;
				public static parse(param0: string): org.joda.time.MonthDay;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public toString(param0: string, param1: java.util.Locale): string;
				public getMonthOfYear(): number;
				public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
				public withField(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.MonthDay;
				public constructor(param0: number[], param1: org.joda.time.Chronology);
				public constructor(param0: org.joda.time.base.BasePartial, param1: org.joda.time.Chronology);
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public toString(): string;
				public size(): number;
				public monthOfYear(): org.joda.time.MonthDay.Property;
				public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public toLocalDate(param0: number): org.joda.time.LocalDate;
				public constructor(param0: any);
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.MonthDay;
				public withMonthOfYear(param0: number): org.joda.time.MonthDay;
				public static fromCalendarFields(param0: java.util.Calendar): org.joda.time.MonthDay;
				public constructor(param0: org.joda.time.DateTimeZone);
				public getDayOfMonth(): number;
				public constructor(param0: org.joda.time.Chronology);
				public static fromDateFields(param0: java.util.Date): org.joda.time.MonthDay;
				public getField(param0: number): org.joda.time.DateTimeField;
				public constructor(param0: any, param1: org.joda.time.Chronology, param2: org.joda.time.format.DateTimeFormatter);
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public getChronology(): org.joda.time.Chronology;
				public getFieldTypes(): org.joda.time.DateTimeFieldType[];
				public constructor(param0: org.joda.time.base.BasePartial, param1: number[]);
				public plusDays(param0: number): org.joda.time.MonthDay;
				public minusDays(param0: number): org.joda.time.MonthDay;
				public withDayOfMonth(param0: number): org.joda.time.MonthDay;
				public static now(): org.joda.time.MonthDay;
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.MonthDay.Property;
				public minusMonths(param0: number): org.joda.time.MonthDay;
				public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				public dayOfMonth(): org.joda.time.MonthDay.Property;
				public static now(param0: org.joda.time.Chronology): org.joda.time.MonthDay;
				public toString(param0: string): string;
				public withPeriodAdded(param0: org.joda.time.ReadablePeriod, param1: number): org.joda.time.MonthDay;
				public plusMonths(param0: number): org.joda.time.MonthDay;
				public constructor(param0: number);
				public withChronologyRetainFields(param0: org.joda.time.Chronology): org.joda.time.MonthDay;
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.MonthDay;
			}
			export module MonthDay {
				export class Property extends org.joda.time.field.AbstractPartialFieldProperty implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.MonthDay.Property>;
					public getMonthDay(): org.joda.time.MonthDay;
					public getField(): org.joda.time.DateTimeField;
					public setCopy(param0: number): org.joda.time.MonthDay;
					public setCopy(param0: string, param1: java.util.Locale): org.joda.time.MonthDay;
					public get(): number;
					public addWrapFieldToCopy(param0: number): org.joda.time.MonthDay;
					public getReadablePartial(): org.joda.time.ReadablePartial;
					public addToCopy(param0: number): org.joda.time.MonthDay;
					public setCopy(param0: string): org.joda.time.MonthDay;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Months extends org.joda.time.base.BaseSingleFieldPeriod {
				public static class: java.lang.Class<org.joda.time.Months>;
				public static ZERO: org.joda.time.Months;
				public static ONE: org.joda.time.Months;
				public static TWO: org.joda.time.Months;
				public static THREE: org.joda.time.Months;
				public static FOUR: org.joda.time.Months;
				public static FIVE: org.joda.time.Months;
				public static SIX: org.joda.time.Months;
				public static SEVEN: org.joda.time.Months;
				public static EIGHT: org.joda.time.Months;
				public static NINE: org.joda.time.Months;
				public static TEN: org.joda.time.Months;
				public static ELEVEN: org.joda.time.Months;
				public static TWELVE: org.joda.time.Months;
				public static MAX_VALUE: org.joda.time.Months;
				public static MIN_VALUE: org.joda.time.Months;
				public getPeriodType(): org.joda.time.PeriodType;
				public isGreaterThan(param0: org.joda.time.Months): boolean;
				public dividedBy(param0: number): org.joda.time.Months;
				public static monthsBetween(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial): org.joda.time.Months;
				public get(param0: org.joda.time.DurationFieldType): number;
				public getValue(param0: number): number;
				public minus(param0: number): org.joda.time.Months;
				public static monthsIn(param0: org.joda.time.ReadableInterval): org.joda.time.Months;
				public static parseMonths(param0: string): org.joda.time.Months;
				public plus(param0: org.joda.time.Months): org.joda.time.Months;
				public toPeriod(): org.joda.time.Period;
				public minus(param0: org.joda.time.Months): org.joda.time.Months;
				public hashCode(): number;
				public negated(): org.joda.time.Months;
				public equals(param0: any): boolean;
				public static monthsBetween(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): org.joda.time.Months;
				public static months(param0: number): org.joda.time.Months;
				public getMonths(): number;
				public getValue(): number;
				public getFieldType(): org.joda.time.DurationFieldType;
				public isLessThan(param0: org.joda.time.Months): boolean;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public toString(): string;
				public size(): number;
				public multipliedBy(param0: number): org.joda.time.Months;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public plus(param0: number): org.joda.time.Months;
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class MutableDateTime extends org.joda.time.base.BaseDateTime implements org.joda.time.ReadWritableDateTime, java.lang.Cloneable, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.MutableDateTime>;
				public static ROUND_NONE: number;
				public static ROUND_FLOOR: number;
				public static ROUND_CEILING: number;
				public static ROUND_HALF_FLOOR: number;
				public static ROUND_HALF_CEILING: number;
				public static ROUND_HALF_EVEN: number;
				public getZone(): org.joda.time.DateTimeZone;
				public static parse(param0: string): org.joda.time.MutableDateTime;
				public getSecondOfDay(): number;
				public getYearOfCentury(): number;
				public isEqual(param0: number): boolean;
				public minuteOfDay(): org.joda.time.MutableDateTime.Property;
				public toDateTime(): org.joda.time.DateTime;
				public setDayOfWeek(param0: number): void;
				public centuryOfEra(): org.joda.time.MutableDateTime.Property;
				public add(param0: org.joda.time.ReadablePeriod, param1: number): void;
				public add(param0: org.joda.time.DurationFieldType, param1: number): void;
				public dayOfWeek(): org.joda.time.MutableDateTime.Property;
				public hourOfDay(): org.joda.time.MutableDateTime.Property;
				public getDayOfWeek(): number;
				public setMinuteOfHour(param0: number): void;
				public setMillisOfSecond(param0: number): void;
				public setTime(param0: number): void;
				public setDateTime(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public isAfter(param0: number): boolean;
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.MutableDateTime.Property;
				public getRoundingField(): org.joda.time.DateTimeField;
				public setHourOfDay(param0: number): void;
				public getCenturyOfEra(): number;
				public constructor(param0: any, param1: org.joda.time.DateTimeZone);
				public era(): org.joda.time.MutableDateTime.Property;
				public yearOfEra(): org.joda.time.MutableDateTime.Property;
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public addMinutes(param0: number): void;
				public getMillisOfDay(): number;
				public setSecondOfDay(param0: number): void;
				public weekOfWeekyear(): org.joda.time.MutableDateTime.Property;
				public constructor(param0: org.joda.time.DateTimeZone);
				public secondOfDay(): org.joda.time.MutableDateTime.Property;
				public getMinuteOfHour(): number;
				public minuteOfHour(): org.joda.time.MutableDateTime.Property;
				public constructor(param0: org.joda.time.Chronology);
				public getYear(): number;
				public copy(): org.joda.time.MutableDateTime;
				public toDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public getWeekOfWeekyear(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: org.joda.time.DateTimeZone);
				public yearOfCentury(): org.joda.time.MutableDateTime.Property;
				public static now(param0: org.joda.time.DateTimeZone): org.joda.time.MutableDateTime;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public setYear(param0: number): void;
				public setTime(param0: number, param1: number, param2: number, param3: number): void;
				public get(param0: org.joda.time.DateTimeField): number;
				public dayOfYear(): org.joda.time.MutableDateTime.Property;
				public setDayOfMonth(param0: number): void;
				public constructor(param0: number, param1: org.joda.time.DateTimeZone);
				public weekyear(): org.joda.time.MutableDateTime.Property;
				public getEra(): number;
				public addDays(param0: number): void;
				public getMillisOfSecond(): number;
				public setMillis(param0: number): void;
				public setSecondOfMinute(param0: number): void;
				public millisOfSecond(): org.joda.time.MutableDateTime.Property;
				public toString(param0: string): string;
				public setChronology(param0: org.joda.time.Chronology): void;
				public millisOfDay(): org.joda.time.MutableDateTime.Property;
				public toMutableDateTime(): org.joda.time.MutableDateTime;
				public constructor(param0: number);
				public setMinuteOfDay(param0: number): void;
				public addMillis(param0: number): void;
				public setDate(param0: number, param1: number, param2: number): void;
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public getHourOfDay(): number;
				public setDate(param0: org.joda.time.ReadableInstant): void;
				public hashCode(): number;
				public add(param0: number): void;
				public addHours(param0: number): void;
				public clone(): any;
				public equals(param0: any): boolean;
				public static now(param0: org.joda.time.Chronology): org.joda.time.MutableDateTime;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public toString(param0: string, param1: java.util.Locale): string;
				public year(): org.joda.time.MutableDateTime.Property;
				public getMonthOfYear(): number;
				public getYearOfEra(): number;
				public isEqual(param0: org.joda.time.ReadableInstant): boolean;
				public setZone(param0: org.joda.time.DateTimeZone): void;
				public getMinuteOfDay(): number;
				public setRounding(param0: org.joda.time.DateTimeField): void;
				public setDate(param0: number): void;
				public setWeekOfWeekyear(param0: number): void;
				public addMonths(param0: number): void;
				public setDayOfYear(param0: number): void;
				public toString(): string;
				public setMonthOfYear(param0: number): void;
				public addSeconds(param0: number): void;
				public setWeekyear(param0: number): void;
				public getDayOfYear(): number;
				public isBefore(param0: number): boolean;
				public add(param0: org.joda.time.ReadableDuration): void;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public constructor(param0: any);
				public getWeekyear(): number;
				public setRounding(param0: org.joda.time.DateTimeField, param1: number): void;
				public toInstant(): org.joda.time.Instant;
				public getDayOfMonth(): number;
				public getSecondOfMinute(): number;
				public toMutableDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.MutableDateTime;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: org.joda.time.Chronology);
				public set(param0: org.joda.time.DateTimeFieldType, param1: number): void;
				public getChronology(): org.joda.time.Chronology;
				public toMutableDateTime(param0: org.joda.time.Chronology): org.joda.time.MutableDateTime;
				public add(param0: org.joda.time.ReadableDuration, param1: number): void;
				public addWeeks(param0: number): void;
				public getMillis(): number;
				public getRoundingMode(): number;
				public monthOfYear(): org.joda.time.MutableDateTime.Property;
				public add(param0: org.joda.time.ReadablePeriod): void;
				public secondOfMinute(): org.joda.time.MutableDateTime.Property;
				public toDateTime(param0: org.joda.time.Chronology): org.joda.time.DateTime;
				public setMillisOfDay(param0: number): void;
				public setTime(param0: org.joda.time.ReadableInstant): void;
				public static now(): org.joda.time.MutableDateTime;
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public setMillis(param0: org.joda.time.ReadableInstant): void;
				public addYears(param0: number): void;
				public static parse(param0: string, param1: org.joda.time.format.DateTimeFormatter): org.joda.time.MutableDateTime;
				public dayOfMonth(): org.joda.time.MutableDateTime.Property;
				public setZoneRetainFields(param0: org.joda.time.DateTimeZone): void;
				public addWeekyears(param0: number): void;
			}
			export module MutableDateTime {
				export class Property extends org.joda.time.field.AbstractReadableInstantFieldProperty {
					public static class: java.lang.Class<org.joda.time.MutableDateTime.Property>;
					public set(param0: string): org.joda.time.MutableDateTime;
					public roundHalfEven(): org.joda.time.MutableDateTime;
					public set(param0: number): org.joda.time.MutableDateTime;
					public roundCeiling(): org.joda.time.MutableDateTime;
					public roundHalfCeiling(): org.joda.time.MutableDateTime;
					public getMutableDateTime(): org.joda.time.MutableDateTime;
					public addWrapField(param0: number): org.joda.time.MutableDateTime;
					public set(param0: string, param1: java.util.Locale): org.joda.time.MutableDateTime;
					public getField(): org.joda.time.DateTimeField;
					public getMillis(): number;
					public roundHalfFloor(): org.joda.time.MutableDateTime;
					public add(param0: number): org.joda.time.MutableDateTime;
					public getChronology(): org.joda.time.Chronology;
					public roundFloor(): org.joda.time.MutableDateTime;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class MutableInterval extends org.joda.time.base.BaseInterval implements org.joda.time.ReadWritableInterval, java.lang.Cloneable, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.MutableInterval>;
				public constructor(param0: number, param1: number);
				public constructor(param0: org.joda.time.ReadablePeriod, param1: org.joda.time.ReadableInstant);
				public constructor(param0: number, param1: number, param2: org.joda.time.Chronology);
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public copy(): org.joda.time.MutableInterval;
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant);
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableDuration);
				public toPeriod(): org.joda.time.Period;
				public hashCode(): number;
				public clone(): any;
				public equals(param0: any): boolean;
				public setInterval(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): void;
				public overlaps(param0: org.joda.time.ReadableInterval): boolean;
				public isAfter(param0: number): boolean;
				public getEndMillis(): number;
				public contains(param0: org.joda.time.ReadableInstant): boolean;
				public setDurationAfterStart(param0: number): void;
				public toInterval(): org.joda.time.Interval;
				public isAfter(param0: org.joda.time.ReadableInterval): boolean;
				public contains(param0: org.joda.time.ReadableInterval): boolean;
				public setStartMillis(param0: number): void;
				public toString(): string;
				public setInterval(param0: org.joda.time.ReadableInterval): void;
				public contains(param0: number): boolean;
				public getStart(): org.joda.time.DateTime;
				public setInterval(param0: number, param1: number): void;
				public setDurationAfterStart(param0: org.joda.time.ReadableDuration): void;
				public isBefore(param0: number): boolean;
				public constructor(param0: any);
				public isBefore(param0: org.joda.time.ReadableInterval): boolean;
				public setDurationBeforeEnd(param0: number): void;
				public toDuration(): org.joda.time.Duration;
				public getChronology(): org.joda.time.Chronology;
				public setEndMillis(param0: number): void;
				public getStartMillis(): number;
				public setPeriodAfterStart(param0: org.joda.time.ReadablePeriod): void;
				public setEnd(param0: org.joda.time.ReadableInstant): void;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public getEnd(): org.joda.time.DateTime;
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadablePeriod);
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public toPeriod(param0: org.joda.time.PeriodType): org.joda.time.Period;
				public toDurationMillis(): number;
				public constructor(param0: org.joda.time.ReadableDuration, param1: org.joda.time.ReadableInstant);
				public setChronology(param0: org.joda.time.Chronology): void;
				public setStart(param0: org.joda.time.ReadableInstant): void;
				public static parse(param0: string): org.joda.time.MutableInterval;
				public setInterval(param0: number, param1: number, param2: org.joda.time.Chronology): void;
				public setPeriodBeforeEnd(param0: org.joda.time.ReadablePeriod): void;
				public setDurationBeforeEnd(param0: org.joda.time.ReadableDuration): void;
				public toMutableInterval(): org.joda.time.MutableInterval;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class MutablePeriod extends org.joda.time.base.BasePeriod implements org.joda.time.ReadWritablePeriod, java.lang.Cloneable, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.MutablePeriod>;
				public constructor(param0: number, param1: number);
				public constructor(param0: number[], param1: org.joda.time.PeriodType);
				public setMinutes(param0: number): void;
				public setValue(param0: number, param1: number): void;
				public static parse(param0: string): org.joda.time.MutablePeriod;
				public getValue(param0: number): number;
				public constructor(param0: number, param1: number, param2: org.joda.time.Chronology);
				public add(param0: number, param1: org.joda.time.Chronology): void;
				public setPeriod(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public setPeriod(param0: number, param1: number): void;
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public copy(): org.joda.time.MutablePeriod;
				public constructor();
				public setWeeks(param0: number): void;
				public setPeriod(param0: org.joda.time.ReadableDuration): void;
				public add(param0: org.joda.time.DurationFieldType, param1: number): void;
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant);
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableDuration);
				public toPeriod(): org.joda.time.Period;
				public getMinutes(): number;
				public set(param0: org.joda.time.DurationFieldType, param1: number): void;
				public setPeriod(param0: number, param1: number, param2: org.joda.time.Chronology): void;
				public hashCode(): number;
				public add(param0: number): void;
				public addHours(param0: number): void;
				public clone(): any;
				public equals(param0: any): boolean;
				public mergePeriod(param0: org.joda.time.ReadablePeriod): void;
				public toString(param0: org.joda.time.format.PeriodFormatter): string;
				public setPeriod(param0: number): void;
				public setMonths(param0: number): void;
				public setPeriod(param0: org.joda.time.ReadablePeriod): void;
				public constructor(param0: any, param1: org.joda.time.PeriodType);
				public setPeriod(param0: number, param1: org.joda.time.Chronology): void;
				public getSeconds(): number;
				public constructor(param0: number, param1: org.joda.time.PeriodType);
				public add(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public addMonths(param0: number): void;
				public static parse(param0: string, param1: org.joda.time.format.PeriodFormatter): org.joda.time.MutablePeriod;
				public constructor(param0: any, param1: org.joda.time.PeriodType, param2: org.joda.time.Chronology);
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public toString(): string;
				public addMinutes(param0: number): void;
				public addSeconds(param0: number): void;
				public constructor(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial, param2: org.joda.time.PeriodType);
				public size(): number;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public add(param0: org.joda.time.ReadableInterval): void;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public add(param0: org.joda.time.ReadableDuration): void;
				public setYears(param0: number): void;
				public constructor(param0: any);
				public constructor(param0: org.joda.time.ReadableDuration, param1: org.joda.time.ReadableInstant, param2: org.joda.time.PeriodType);
				public setSeconds(param0: number): void;
				public getPeriodType(): org.joda.time.PeriodType;
				public getWeeks(): number;
				public get(param0: org.joda.time.DurationFieldType): number;
				public constructor(param0: number, param1: number, param2: org.joda.time.PeriodType, param3: org.joda.time.Chronology);
				public constructor(param0: number, param1: org.joda.time.PeriodType, param2: org.joda.time.Chronology);
				public setHours(param0: number): void;
				public setPeriod(param0: org.joda.time.ReadableInterval): void;
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableDuration, param2: org.joda.time.PeriodType);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: org.joda.time.PeriodType);
				public setDays(param0: number): void;
				public clear(): void;
				public getYears(): number;
				public getMonths(): number;
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant, param2: org.joda.time.PeriodType);
				public getMillis(): number;
				public addWeeks(param0: number): void;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
				public add(param0: org.joda.time.ReadablePeriod): void;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public setPeriod(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): void;
				public constructor(param0: number, param1: number, param2: org.joda.time.PeriodType);
				public constructor(param0: org.joda.time.PeriodType);
				public addDays(param0: number): void;
				public addYears(param0: number): void;
				public setMillis(param0: number): void;
				public constructor(param0: org.joda.time.ReadableDuration, param1: org.joda.time.ReadableInstant);
				public constructor(param0: number);
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public getDays(): number;
				public getHours(): number;
				public setPeriod(param0: org.joda.time.ReadableDuration, param1: org.joda.time.Chronology): void;
				public addMillis(param0: number): void;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Partial extends org.joda.time.base.AbstractPartial implements org.joda.time.ReadablePartial, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.Partial>;
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.Partial;
				public withField(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.Partial;
				public withPeriodAdded(param0: org.joda.time.ReadablePeriod, param1: number): org.joda.time.Partial;
				public with(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.Partial;
				public isMatch(param0: org.joda.time.ReadablePartial): boolean;
				public constructor(param0: org.joda.time.DateTimeFieldType, param1: number, param2: org.joda.time.Chronology);
				public constructor(param0: org.joda.time.Chronology);
				public getField(param0: number): org.joda.time.DateTimeField;
				public getValues(): number[];
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.Partial.Property;
				public getValue(param0: number): number;
				public constructor(param0: org.joda.time.ReadablePartial);
				public getFormatter(): org.joda.time.format.DateTimeFormatter;
				public constructor();
				public getChronology(): org.joda.time.Chronology;
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public withChronologyRetainFields(param0: org.joda.time.Chronology): org.joda.time.Partial;
				public hashCode(): number;
				public getFieldTypes(): org.joda.time.DateTimeFieldType[];
				public equals(param0: any): boolean;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public toString(param0: string, param1: java.util.Locale): string;
				public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
				public constructor(param0: org.joda.time.DateTimeFieldType, param1: number);
				public constructor(param0: org.joda.time.DateTimeFieldType[], param1: number[]);
				public isMatch(param0: org.joda.time.ReadableInstant): boolean;
				public toString(): string;
				public constructor(param0: org.joda.time.DateTimeFieldType[], param1: number[], param2: org.joda.time.Chronology);
				public size(): number;
				public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				public without(param0: org.joda.time.DateTimeFieldType): org.joda.time.Partial;
				public toString(param0: string): string;
				public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
				public withFieldAddWrapped(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.Partial;
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.Partial;
				public toStringList(): string;
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.Partial;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
			}
			export module Partial {
				export class Property extends org.joda.time.field.AbstractPartialFieldProperty implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.Partial.Property>;
					public getField(): org.joda.time.DateTimeField;
					public getPartial(): org.joda.time.Partial;
					public withMinimumValue(): org.joda.time.Partial;
					public setCopy(param0: string, param1: java.util.Locale): org.joda.time.Partial;
					public get(): number;
					public addToCopy(param0: number): org.joda.time.Partial;
					public withMaximumValue(): org.joda.time.Partial;
					public addWrapFieldToCopy(param0: number): org.joda.time.Partial;
					public getReadablePartial(): org.joda.time.ReadablePartial;
					public setCopy(param0: string): org.joda.time.Partial;
					public setCopy(param0: number): org.joda.time.Partial;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Period extends org.joda.time.base.BasePeriod implements org.joda.time.ReadablePeriod, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.Period>;
				public static ZERO: org.joda.time.Period;
				public constructor(param0: number, param1: number);
				public normalizedStandard(param0: org.joda.time.PeriodType): org.joda.time.Period;
				public constructor(param0: number[], param1: org.joda.time.PeriodType);
				public plusMillis(param0: number): org.joda.time.Period;
				public toStandardDuration(): org.joda.time.Duration;
				public static parse(param0: string): org.joda.time.Period;
				public plusSeconds(param0: number): org.joda.time.Period;
				public static months(param0: number): org.joda.time.Period;
				public getValue(param0: number): number;
				public static years(param0: number): org.joda.time.Period;
				public constructor(param0: number, param1: number, param2: org.joda.time.Chronology);
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.Period;
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant);
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableDuration);
				public toPeriod(): org.joda.time.Period;
				public getMinutes(): number;
				public hashCode(): number;
				public toStandardMinutes(): org.joda.time.Minutes;
				public equals(param0: any): boolean;
				public withField(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.Period;
				public static parse(param0: string, param1: org.joda.time.format.PeriodFormatter): org.joda.time.Period;
				public static seconds(param0: number): org.joda.time.Period;
				public static millis(param0: number): org.joda.time.Period;
				public static minutes(param0: number): org.joda.time.Period;
				public plusDays(param0: number): org.joda.time.Period;
				public plusMonths(param0: number): org.joda.time.Period;
				public toString(param0: org.joda.time.format.PeriodFormatter): string;
				public static weeks(param0: number): org.joda.time.Period;
				public constructor(param0: any, param1: org.joda.time.PeriodType);
				public getSeconds(): number;
				public constructor(param0: number, param1: org.joda.time.PeriodType);
				public withHours(param0: number): org.joda.time.Period;
				public constructor(param0: any, param1: org.joda.time.PeriodType, param2: org.joda.time.Chronology);
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public toString(): string;
				public negated(): org.joda.time.Period;
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.Period;
				public constructor(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial, param2: org.joda.time.PeriodType);
				public size(): number;
				public static fieldDifference(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial): org.joda.time.Period;
				public normalizedStandard(): org.joda.time.Period;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public static days(param0: number): org.joda.time.Period;
				public minusDays(param0: number): org.joda.time.Period;
				public constructor(param0: any);
				public plusMinutes(param0: number): org.joda.time.Period;
				public multipliedBy(param0: number): org.joda.time.Period;
				public toStandardSeconds(): org.joda.time.Seconds;
				public withMonths(param0: number): org.joda.time.Period;
				public toStandardHours(): org.joda.time.Hours;
				public withPeriodType(param0: org.joda.time.PeriodType): org.joda.time.Period;
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.Period;
				public constructor(param0: org.joda.time.ReadableDuration, param1: org.joda.time.ReadableInstant, param2: org.joda.time.PeriodType);
				public getPeriodType(): org.joda.time.PeriodType;
				public getWeeks(): number;
				public get(param0: org.joda.time.DurationFieldType): number;
				public toStandardWeeks(): org.joda.time.Weeks;
				public constructor(param0: number, param1: number, param2: org.joda.time.PeriodType, param3: org.joda.time.Chronology);
				public constructor(param0: number, param1: org.joda.time.PeriodType, param2: org.joda.time.Chronology);
				public minusMillis(param0: number): org.joda.time.Period;
				public minusHours(param0: number): org.joda.time.Period;
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableDuration, param2: org.joda.time.PeriodType);
				public constructor(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: org.joda.time.PeriodType);
				public withYears(param0: number): org.joda.time.Period;
				public withDays(param0: number): org.joda.time.Period;
				public minusWeeks(param0: number): org.joda.time.Period;
				public minusMonths(param0: number): org.joda.time.Period;
				public getYears(): number;
				public getMonths(): number;
				public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant, param2: org.joda.time.PeriodType);
				public getMillis(): number;
				public withSeconds(param0: number): org.joda.time.Period;
				public withFields(param0: org.joda.time.ReadablePeriod): org.joda.time.Period;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number);
				public plusWeeks(param0: number): org.joda.time.Period;
				public minusSeconds(param0: number): org.joda.time.Period;
				public withMinutes(param0: number): org.joda.time.Period;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public minusMinutes(param0: number): org.joda.time.Period;
				public constructor(param0: number, param1: number, param2: org.joda.time.PeriodType);
				public plusHours(param0: number): org.joda.time.Period;
				public withWeeks(param0: number): org.joda.time.Period;
				public withMillis(param0: number): org.joda.time.Period;
				public constructor(param0: org.joda.time.ReadableDuration, param1: org.joda.time.ReadableInstant);
				public minusYears(param0: number): org.joda.time.Period;
				public static hours(param0: number): org.joda.time.Period;
				public constructor(param0: number);
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public getDays(): number;
				public getHours(): number;
				public toStandardDays(): org.joda.time.Days;
				public plusYears(param0: number): org.joda.time.Period;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class PeriodType extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.PeriodType>;
				public static yearMonthDay(): org.joda.time.PeriodType;
				public static forFields(param0: org.joda.time.DurationFieldType[]): org.joda.time.PeriodType;
				public static weeks(): org.joda.time.PeriodType;
				public withMonthsRemoved(): org.joda.time.PeriodType;
				public static yearWeekDay(): org.joda.time.PeriodType;
				public static minutes(): org.joda.time.PeriodType;
				public withYearsRemoved(): org.joda.time.PeriodType;
				public withMillisRemoved(): org.joda.time.PeriodType;
				public static hours(): org.joda.time.PeriodType;
				public static time(): org.joda.time.PeriodType;
				public constructor(param0: string, param1: org.joda.time.DurationFieldType[], param2: number[]);
				public static yearDayTime(): org.joda.time.PeriodType;
				public withSecondsRemoved(): org.joda.time.PeriodType;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public static dayTime(): org.joda.time.PeriodType;
				public static months(): org.joda.time.PeriodType;
				public withWeeksRemoved(): org.joda.time.PeriodType;
				public indexOf(param0: org.joda.time.DurationFieldType): number;
				public static standard(): org.joda.time.PeriodType;
				public getName(): string;
				public static yearMonthDayTime(): org.joda.time.PeriodType;
				public static years(): org.joda.time.PeriodType;
				public toString(): string;
				public size(): number;
				public static days(): org.joda.time.PeriodType;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public equals(obj: any): boolean;
				public static seconds(): org.joda.time.PeriodType;
				public static yearWeekDayTime(): org.joda.time.PeriodType;
				public withHoursRemoved(): org.joda.time.PeriodType;
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public static millis(): org.joda.time.PeriodType;
				public static yearDay(): org.joda.time.PeriodType;
				public withDaysRemoved(): org.joda.time.PeriodType;
				public withMinutesRemoved(): org.joda.time.PeriodType;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class ReadWritableDateTime extends java.lang.Object implements org.joda.time.ReadableDateTime, org.joda.time.ReadWritableInstant {
				public static class: java.lang.Class<org.joda.time.ReadWritableDateTime>;
				/**
				 * Constructs a new instance of the org.joda.time.ReadWritableDateTime interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setYear(param0: number): void;
					addYears(param0: number): void;
					setWeekyear(param0: number): void;
					addWeekyears(param0: number): void;
					setMonthOfYear(param0: number): void;
					addMonths(param0: number): void;
					setWeekOfWeekyear(param0: number): void;
					addWeeks(param0: number): void;
					setDayOfYear(param0: number): void;
					setDayOfMonth(param0: number): void;
					setDayOfWeek(param0: number): void;
					addDays(param0: number): void;
					setHourOfDay(param0: number): void;
					addHours(param0: number): void;
					setMinuteOfDay(param0: number): void;
					setMinuteOfHour(param0: number): void;
					addMinutes(param0: number): void;
					setSecondOfDay(param0: number): void;
					setSecondOfMinute(param0: number): void;
					addSeconds(param0: number): void;
					setMillisOfDay(param0: number): void;
					setMillisOfSecond(param0: number): void;
					addMillis(param0: number): void;
					setDate(param0: number, param1: number, param2: number): void;
					setTime(param0: number, param1: number, param2: number, param3: number): void;
					setDateTime(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					getDayOfWeek(): number;
					getDayOfMonth(): number;
					getDayOfYear(): number;
					getWeekOfWeekyear(): number;
					getWeekyear(): number;
					getMonthOfYear(): number;
					getYear(): number;
					getYearOfEra(): number;
					getYearOfCentury(): number;
					getCenturyOfEra(): number;
					getEra(): number;
					getMillisOfSecond(): number;
					getMillisOfDay(): number;
					getSecondOfMinute(): number;
					getSecondOfDay(): number;
					getMinuteOfHour(): number;
					getMinuteOfDay(): number;
					getHourOfDay(): number;
					toDateTime(): org.joda.time.DateTime;
					toMutableDateTime(): org.joda.time.MutableDateTime;
					toString(param0: string): string;
					toString(param0: string, param1: java.util.Locale): string;
					setMillis(param0: number): void;
					setMillis(param0: org.joda.time.ReadableInstant): void;
					setChronology(param0: org.joda.time.Chronology): void;
					setZone(param0: org.joda.time.DateTimeZone): void;
					setZoneRetainFields(param0: org.joda.time.DateTimeZone): void;
					add(param0: number): void;
					add(param0: org.joda.time.ReadableDuration): void;
					add(param0: org.joda.time.ReadableDuration, param1: number): void;
					add(param0: org.joda.time.ReadablePeriod): void;
					add(param0: org.joda.time.ReadablePeriod, param1: number): void;
					set(param0: org.joda.time.DateTimeFieldType, param1: number): void;
					add(param0: org.joda.time.DurationFieldType, param1: number): void;
					getMillis(): number;
					getChronology(): org.joda.time.Chronology;
					getZone(): org.joda.time.DateTimeZone;
					get(param0: org.joda.time.DateTimeFieldType): number;
					isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					toInstant(): org.joda.time.Instant;
					isEqual(param0: org.joda.time.ReadableInstant): boolean;
					isAfter(param0: org.joda.time.ReadableInstant): boolean;
					isBefore(param0: org.joda.time.ReadableInstant): boolean;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					getMillis(): number;
					getChronology(): org.joda.time.Chronology;
					getZone(): org.joda.time.DateTimeZone;
					get(param0: org.joda.time.DateTimeFieldType): number;
					isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					toInstant(): org.joda.time.Instant;
					isEqual(param0: org.joda.time.ReadableInstant): boolean;
					isAfter(param0: org.joda.time.ReadableInstant): boolean;
					isBefore(param0: org.joda.time.ReadableInstant): boolean;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public getZone(): org.joda.time.DateTimeZone;
				public getSecondOfDay(): number;
				public getYearOfCentury(): number;
				public setDate(param0: number, param1: number, param2: number): void;
				public toDateTime(): org.joda.time.DateTime;
				public setDayOfWeek(param0: number): void;
				public add(param0: org.joda.time.ReadablePeriod, param1: number): void;
				public getHourOfDay(): number;
				public add(param0: org.joda.time.DurationFieldType, param1: number): void;
				public hashCode(): number;
				public addHours(param0: number): void;
				public add(param0: number): void;
				public equals(param0: any): boolean;
				public getDayOfWeek(): number;
				public setMinuteOfHour(param0: number): void;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public toString(param0: string, param1: java.util.Locale): string;
				public setMillisOfSecond(param0: number): void;
				public setDateTime(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public getMonthOfYear(): number;
				public getYearOfEra(): number;
				public isEqual(param0: org.joda.time.ReadableInstant): boolean;
				public setZone(param0: org.joda.time.DateTimeZone): void;
				public getMinuteOfDay(): number;
				public setHourOfDay(param0: number): void;
				public setWeekOfWeekyear(param0: number): void;
				public getCenturyOfEra(): number;
				public addMonths(param0: number): void;
				public setDayOfYear(param0: number): void;
				public toString(): string;
				public setMonthOfYear(param0: number): void;
				public addMinutes(param0: number): void;
				public addSeconds(param0: number): void;
				public setWeekyear(param0: number): void;
				public getMillisOfDay(): number;
				public getDayOfYear(): number;
				public add(param0: org.joda.time.ReadableDuration): void;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public getWeekyear(): number;
				public setSecondOfDay(param0: number): void;
				public toInstant(): org.joda.time.Instant;
				public getDayOfMonth(): number;
				public getSecondOfMinute(): number;
				public getMinuteOfHour(): number;
				public getYear(): number;
				public set(param0: org.joda.time.DateTimeFieldType, param1: number): void;
				public getChronology(): org.joda.time.Chronology;
				public add(param0: org.joda.time.ReadableDuration, param1: number): void;
				public getWeekOfWeekyear(): number;
				public addWeeks(param0: number): void;
				public getMillis(): number;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public setYear(param0: number): void;
				public setTime(param0: number, param1: number, param2: number, param3: number): void;
				public add(param0: org.joda.time.ReadablePeriod): void;
				public setDayOfMonth(param0: number): void;
				public setMillisOfDay(param0: number): void;
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public getEra(): number;
				public addDays(param0: number): void;
				public setMillis(param0: org.joda.time.ReadableInstant): void;
				public getMillisOfSecond(): number;
				public equals(obj: any): boolean;
				public addYears(param0: number): void;
				public setMillis(param0: number): void;
				public setSecondOfMinute(param0: number): void;
				public toString(param0: string): string;
				public setChronology(param0: org.joda.time.Chronology): void;
				public toMutableDateTime(): org.joda.time.MutableDateTime;
				public setZoneRetainFields(param0: org.joda.time.DateTimeZone): void;
				public addWeekyears(param0: number): void;
				public setMinuteOfDay(param0: number): void;
				public addMillis(param0: number): void;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class ReadWritableInstant extends java.lang.Object implements org.joda.time.ReadableInstant {
				public static class: java.lang.Class<org.joda.time.ReadWritableInstant>;
				/**
				 * Constructs a new instance of the org.joda.time.ReadWritableInstant interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setMillis(param0: number): void;
					setMillis(param0: org.joda.time.ReadableInstant): void;
					setChronology(param0: org.joda.time.Chronology): void;
					setZone(param0: org.joda.time.DateTimeZone): void;
					setZoneRetainFields(param0: org.joda.time.DateTimeZone): void;
					add(param0: number): void;
					add(param0: org.joda.time.ReadableDuration): void;
					add(param0: org.joda.time.ReadableDuration, param1: number): void;
					add(param0: org.joda.time.ReadablePeriod): void;
					add(param0: org.joda.time.ReadablePeriod, param1: number): void;
					set(param0: org.joda.time.DateTimeFieldType, param1: number): void;
					add(param0: org.joda.time.DurationFieldType, param1: number): void;
					getMillis(): number;
					getChronology(): org.joda.time.Chronology;
					getZone(): org.joda.time.DateTimeZone;
					get(param0: org.joda.time.DateTimeFieldType): number;
					isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					toInstant(): org.joda.time.Instant;
					isEqual(param0: org.joda.time.ReadableInstant): boolean;
					isAfter(param0: org.joda.time.ReadableInstant): boolean;
					isBefore(param0: org.joda.time.ReadableInstant): boolean;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public getZone(): org.joda.time.DateTimeZone;
				public toInstant(): org.joda.time.Instant;
				public set(param0: org.joda.time.DateTimeFieldType, param1: number): void;
				public add(param0: org.joda.time.ReadablePeriod, param1: number): void;
				public getChronology(): org.joda.time.Chronology;
				public add(param0: org.joda.time.ReadableDuration, param1: number): void;
				public add(param0: org.joda.time.DurationFieldType, param1: number): void;
				public hashCode(): number;
				public add(param0: number): void;
				public equals(param0: any): boolean;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public getMillis(): number;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public isEqual(param0: org.joda.time.ReadableInstant): boolean;
				public setZone(param0: org.joda.time.DateTimeZone): void;
				public add(param0: org.joda.time.ReadablePeriod): void;
				public toString(): string;
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public setMillis(param0: org.joda.time.ReadableInstant): void;
				public equals(obj: any): boolean;
				public setMillis(param0: number): void;
				public setChronology(param0: org.joda.time.Chronology): void;
				public setZoneRetainFields(param0: org.joda.time.DateTimeZone): void;
				public add(param0: org.joda.time.ReadableDuration): void;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class ReadWritableInterval extends java.lang.Object implements org.joda.time.ReadableInterval {
				public static class: java.lang.Class<org.joda.time.ReadWritableInterval>;
				/**
				 * Constructs a new instance of the org.joda.time.ReadWritableInterval interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setInterval(param0: number, param1: number): void;
					setInterval(param0: org.joda.time.ReadableInterval): void;
					setInterval(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): void;
					setChronology(param0: org.joda.time.Chronology): void;
					setStartMillis(param0: number): void;
					setStart(param0: org.joda.time.ReadableInstant): void;
					setEndMillis(param0: number): void;
					setEnd(param0: org.joda.time.ReadableInstant): void;
					setDurationAfterStart(param0: org.joda.time.ReadableDuration): void;
					setDurationBeforeEnd(param0: org.joda.time.ReadableDuration): void;
					setPeriodAfterStart(param0: org.joda.time.ReadablePeriod): void;
					setPeriodBeforeEnd(param0: org.joda.time.ReadablePeriod): void;
					getChronology(): org.joda.time.Chronology;
					getStartMillis(): number;
					getStart(): org.joda.time.DateTime;
					getEndMillis(): number;
					getEnd(): org.joda.time.DateTime;
					contains(param0: org.joda.time.ReadableInstant): boolean;
					contains(param0: org.joda.time.ReadableInterval): boolean;
					overlaps(param0: org.joda.time.ReadableInterval): boolean;
					isAfter(param0: org.joda.time.ReadableInstant): boolean;
					isAfter(param0: org.joda.time.ReadableInterval): boolean;
					isBefore(param0: org.joda.time.ReadableInstant): boolean;
					isBefore(param0: org.joda.time.ReadableInterval): boolean;
					toInterval(): org.joda.time.Interval;
					toMutableInterval(): org.joda.time.MutableInterval;
					toDuration(): org.joda.time.Duration;
					toDurationMillis(): number;
					toPeriod(): org.joda.time.Period;
					toPeriod(param0: org.joda.time.PeriodType): org.joda.time.Period;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public toDuration(): org.joda.time.Duration;
				public getChronology(): org.joda.time.Chronology;
				public setEndMillis(param0: number): void;
				public getStartMillis(): number;
				public toPeriod(): org.joda.time.Period;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public setInterval(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): void;
				public setPeriodAfterStart(param0: org.joda.time.ReadablePeriod): void;
				public overlaps(param0: org.joda.time.ReadableInterval): boolean;
				public setEnd(param0: org.joda.time.ReadableInstant): void;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public getEndMillis(): number;
				public getEnd(): org.joda.time.DateTime;
				public contains(param0: org.joda.time.ReadableInstant): boolean;
				public toInterval(): org.joda.time.Interval;
				public isAfter(param0: org.joda.time.ReadableInterval): boolean;
				public contains(param0: org.joda.time.ReadableInterval): boolean;
				public setStartMillis(param0: number): void;
				public toString(): string;
				public setInterval(param0: org.joda.time.ReadableInterval): void;
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public toPeriod(param0: org.joda.time.PeriodType): org.joda.time.Period;
				public toDurationMillis(): number;
				public getStart(): org.joda.time.DateTime;
				public equals(obj: any): boolean;
				public setInterval(param0: number, param1: number): void;
				public setChronology(param0: org.joda.time.Chronology): void;
				public setStart(param0: org.joda.time.ReadableInstant): void;
				public setDurationAfterStart(param0: org.joda.time.ReadableDuration): void;
				public isBefore(param0: org.joda.time.ReadableInterval): boolean;
				public setPeriodBeforeEnd(param0: org.joda.time.ReadablePeriod): void;
				public setDurationBeforeEnd(param0: org.joda.time.ReadableDuration): void;
				public toMutableInterval(): org.joda.time.MutableInterval;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class ReadWritablePeriod extends java.lang.Object implements org.joda.time.ReadablePeriod {
				public static class: java.lang.Class<org.joda.time.ReadWritablePeriod>;
				/**
				 * Constructs a new instance of the org.joda.time.ReadWritablePeriod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					clear(): void;
					setValue(param0: number, param1: number): void;
					set(param0: org.joda.time.DurationFieldType, param1: number): void;
					setPeriod(param0: org.joda.time.ReadablePeriod): void;
					setPeriod(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					setPeriod(param0: org.joda.time.ReadableInterval): void;
					add(param0: org.joda.time.DurationFieldType, param1: number): void;
					add(param0: org.joda.time.ReadablePeriod): void;
					add(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					add(param0: org.joda.time.ReadableInterval): void;
					setYears(param0: number): void;
					addYears(param0: number): void;
					setMonths(param0: number): void;
					addMonths(param0: number): void;
					setWeeks(param0: number): void;
					addWeeks(param0: number): void;
					setDays(param0: number): void;
					addDays(param0: number): void;
					setHours(param0: number): void;
					addHours(param0: number): void;
					setMinutes(param0: number): void;
					addMinutes(param0: number): void;
					setSeconds(param0: number): void;
					addSeconds(param0: number): void;
					setMillis(param0: number): void;
					addMillis(param0: number): void;
					getPeriodType(): org.joda.time.PeriodType;
					size(): number;
					getFieldType(param0: number): org.joda.time.DurationFieldType;
					getValue(param0: number): number;
					get(param0: org.joda.time.DurationFieldType): number;
					isSupported(param0: org.joda.time.DurationFieldType): boolean;
					toPeriod(): org.joda.time.Period;
					toMutablePeriod(): org.joda.time.MutablePeriod;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public setSeconds(param0: number): void;
				public getPeriodType(): org.joda.time.PeriodType;
				public setMinutes(param0: number): void;
				public get(param0: org.joda.time.DurationFieldType): number;
				public setValue(param0: number, param1: number): void;
				public getValue(param0: number): number;
				public setPeriod(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public setHours(param0: number): void;
				public setPeriod(param0: org.joda.time.ReadableInterval): void;
				public setWeeks(param0: number): void;
				public add(param0: org.joda.time.DurationFieldType, param1: number): void;
				public toPeriod(): org.joda.time.Period;
				public setDays(param0: number): void;
				public set(param0: org.joda.time.DurationFieldType, param1: number): void;
				public hashCode(): number;
				public clear(): void;
				public addHours(param0: number): void;
				public equals(param0: any): boolean;
				public addWeeks(param0: number): void;
				public add(param0: org.joda.time.ReadablePeriod): void;
				public setMonths(param0: number): void;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public setPeriod(param0: org.joda.time.ReadablePeriod): void;
				public add(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public addMonths(param0: number): void;
				public toString(): string;
				public addMinutes(param0: number): void;
				public addSeconds(param0: number): void;
				public size(): number;
				public addDays(param0: number): void;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public equals(obj: any): boolean;
				public add(param0: org.joda.time.ReadableInterval): void;
				public addYears(param0: number): void;
				public setMillis(param0: number): void;
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public setYears(param0: number): void;
				public addMillis(param0: number): void;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class ReadableDateTime extends java.lang.Object implements org.joda.time.ReadableInstant {
				public static class: java.lang.Class<org.joda.time.ReadableDateTime>;
				/**
				 * Constructs a new instance of the org.joda.time.ReadableDateTime interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getDayOfWeek(): number;
					getDayOfMonth(): number;
					getDayOfYear(): number;
					getWeekOfWeekyear(): number;
					getWeekyear(): number;
					getMonthOfYear(): number;
					getYear(): number;
					getYearOfEra(): number;
					getYearOfCentury(): number;
					getCenturyOfEra(): number;
					getEra(): number;
					getMillisOfSecond(): number;
					getMillisOfDay(): number;
					getSecondOfMinute(): number;
					getSecondOfDay(): number;
					getMinuteOfHour(): number;
					getMinuteOfDay(): number;
					getHourOfDay(): number;
					toDateTime(): org.joda.time.DateTime;
					toMutableDateTime(): org.joda.time.MutableDateTime;
					toString(param0: string): string;
					toString(param0: string, param1: java.util.Locale): string;
					getMillis(): number;
					getChronology(): org.joda.time.Chronology;
					getZone(): org.joda.time.DateTimeZone;
					get(param0: org.joda.time.DateTimeFieldType): number;
					isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					toInstant(): org.joda.time.Instant;
					isEqual(param0: org.joda.time.ReadableInstant): boolean;
					isAfter(param0: org.joda.time.ReadableInstant): boolean;
					isBefore(param0: org.joda.time.ReadableInstant): boolean;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public getZone(): org.joda.time.DateTimeZone;
				public toInstant(): org.joda.time.Instant;
				public getDayOfMonth(): number;
				public getSecondOfMinute(): number;
				public getMinuteOfHour(): number;
				public getSecondOfDay(): number;
				public getYearOfCentury(): number;
				public getYear(): number;
				public toDateTime(): org.joda.time.DateTime;
				public getChronology(): org.joda.time.Chronology;
				public getHourOfDay(): number;
				public getWeekOfWeekyear(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getDayOfWeek(): number;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public toString(param0: string, param1: java.util.Locale): string;
				public getMonthOfYear(): number;
				public getYearOfEra(): number;
				public getMillis(): number;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public isEqual(param0: org.joda.time.ReadableInstant): boolean;
				public getMinuteOfDay(): number;
				public getCenturyOfEra(): number;
				public toString(): string;
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public getEra(): number;
				public getMillisOfSecond(): number;
				public equals(obj: any): boolean;
				public getMillisOfDay(): number;
				public toString(param0: string): string;
				public toMutableDateTime(): org.joda.time.MutableDateTime;
				public getDayOfYear(): number;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public getWeekyear(): number;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class ReadableDuration extends java.lang.Comparable<org.joda.time.ReadableDuration> {
				public static class: java.lang.Class<org.joda.time.ReadableDuration>;
				/**
				 * Constructs a new instance of the org.joda.time.ReadableDuration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getMillis(): number;
					toDuration(): org.joda.time.Duration;
					toPeriod(): org.joda.time.Period;
					isEqual(param0: org.joda.time.ReadableDuration): boolean;
					isLongerThan(param0: org.joda.time.ReadableDuration): boolean;
					isShorterThan(param0: org.joda.time.ReadableDuration): boolean;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public toDuration(): org.joda.time.Duration;
				public equals(obj: any): boolean;
				public toPeriod(): org.joda.time.Period;
				public isEqual(param0: org.joda.time.ReadableDuration): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public isShorterThan(param0: org.joda.time.ReadableDuration): boolean;
				public toString(): string;
				public isLongerThan(param0: org.joda.time.ReadableDuration): boolean;
				public getMillis(): number;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class ReadableInstant extends java.lang.Comparable<org.joda.time.ReadableInstant> {
				public static class: java.lang.Class<org.joda.time.ReadableInstant>;
				/**
				 * Constructs a new instance of the org.joda.time.ReadableInstant interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getMillis(): number;
					getChronology(): org.joda.time.Chronology;
					getZone(): org.joda.time.DateTimeZone;
					get(param0: org.joda.time.DateTimeFieldType): number;
					isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					toInstant(): org.joda.time.Instant;
					isEqual(param0: org.joda.time.ReadableInstant): boolean;
					isAfter(param0: org.joda.time.ReadableInstant): boolean;
					isBefore(param0: org.joda.time.ReadableInstant): boolean;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public isEqual(param0: org.joda.time.ReadableInstant): boolean;
				public getZone(): org.joda.time.DateTimeZone;
				public toInstant(): org.joda.time.Instant;
				public toString(): string;
				public getChronology(): org.joda.time.Chronology;
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public getMillis(): number;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class ReadableInterval extends java.lang.Object {
				public static class: java.lang.Class<org.joda.time.ReadableInterval>;
				/**
				 * Constructs a new instance of the org.joda.time.ReadableInterval interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getChronology(): org.joda.time.Chronology;
					getStartMillis(): number;
					getStart(): org.joda.time.DateTime;
					getEndMillis(): number;
					getEnd(): org.joda.time.DateTime;
					contains(param0: org.joda.time.ReadableInstant): boolean;
					contains(param0: org.joda.time.ReadableInterval): boolean;
					overlaps(param0: org.joda.time.ReadableInterval): boolean;
					isAfter(param0: org.joda.time.ReadableInstant): boolean;
					isAfter(param0: org.joda.time.ReadableInterval): boolean;
					isBefore(param0: org.joda.time.ReadableInstant): boolean;
					isBefore(param0: org.joda.time.ReadableInterval): boolean;
					toInterval(): org.joda.time.Interval;
					toMutableInterval(): org.joda.time.MutableInterval;
					toDuration(): org.joda.time.Duration;
					toDurationMillis(): number;
					toPeriod(): org.joda.time.Period;
					toPeriod(param0: org.joda.time.PeriodType): org.joda.time.Period;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public contains(param0: org.joda.time.ReadableInstant): boolean;
				public toDuration(): org.joda.time.Duration;
				public toInterval(): org.joda.time.Interval;
				public isAfter(param0: org.joda.time.ReadableInterval): boolean;
				public contains(param0: org.joda.time.ReadableInterval): boolean;
				public toString(): string;
				public getChronology(): org.joda.time.Chronology;
				public isAfter(param0: org.joda.time.ReadableInstant): boolean;
				public toPeriod(param0: org.joda.time.PeriodType): org.joda.time.Period;
				public toDurationMillis(): number;
				public getStart(): org.joda.time.DateTime;
				public equals(obj: any): boolean;
				public getStartMillis(): number;
				public toPeriod(): org.joda.time.Period;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public overlaps(param0: org.joda.time.ReadableInterval): boolean;
				public isBefore(param0: org.joda.time.ReadableInterval): boolean;
				public isBefore(param0: org.joda.time.ReadableInstant): boolean;
				public getEndMillis(): number;
				public getEnd(): org.joda.time.DateTime;
				public toMutableInterval(): org.joda.time.MutableInterval;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class ReadablePartial extends java.lang.Comparable<org.joda.time.ReadablePartial> {
				public static class: java.lang.Class<org.joda.time.ReadablePartial>;
				/**
				 * Constructs a new instance of the org.joda.time.ReadablePartial interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					size(): number;
					getFieldType(param0: number): org.joda.time.DateTimeFieldType;
					getField(param0: number): org.joda.time.DateTimeField;
					getValue(param0: number): number;
					getChronology(): org.joda.time.Chronology;
					get(param0: org.joda.time.DateTimeFieldType): number;
					isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public equals(obj: any): boolean;
				public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getField(param0: number): org.joda.time.DateTimeField;
				public getValue(param0: number): number;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public toString(): string;
				public size(): number;
				public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				public getChronology(): org.joda.time.Chronology;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class ReadablePeriod extends java.lang.Object {
				public static class: java.lang.Class<org.joda.time.ReadablePeriod>;
				/**
				 * Constructs a new instance of the org.joda.time.ReadablePeriod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPeriodType(): org.joda.time.PeriodType;
					size(): number;
					getFieldType(param0: number): org.joda.time.DurationFieldType;
					getValue(param0: number): number;
					get(param0: org.joda.time.DurationFieldType): number;
					isSupported(param0: org.joda.time.DurationFieldType): boolean;
					toPeriod(): org.joda.time.Period;
					toMutablePeriod(): org.joda.time.MutablePeriod;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public equals(obj: any): boolean;
				public toPeriod(): org.joda.time.Period;
				public getPeriodType(): org.joda.time.PeriodType;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public hashCode(): number;
				public get(param0: org.joda.time.DurationFieldType): number;
				public equals(param0: any): boolean;
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public getValue(param0: number): number;
				public toString(): string;
				public size(): number;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Seconds extends org.joda.time.base.BaseSingleFieldPeriod {
				public static class: java.lang.Class<org.joda.time.Seconds>;
				public static ZERO: org.joda.time.Seconds;
				public static ONE: org.joda.time.Seconds;
				public static TWO: org.joda.time.Seconds;
				public static THREE: org.joda.time.Seconds;
				public static MAX_VALUE: org.joda.time.Seconds;
				public static MIN_VALUE: org.joda.time.Seconds;
				public toStandardHours(): org.joda.time.Hours;
				public static standardSecondsIn(param0: org.joda.time.ReadablePeriod): org.joda.time.Seconds;
				public toStandardDuration(): org.joda.time.Duration;
				public getPeriodType(): org.joda.time.PeriodType;
				public get(param0: org.joda.time.DurationFieldType): number;
				public toStandardWeeks(): org.joda.time.Weeks;
				public getValue(param0: number): number;
				public static secondsBetween(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): org.joda.time.Seconds;
				public minus(param0: number): org.joda.time.Seconds;
				public toPeriod(): org.joda.time.Period;
				public hashCode(): number;
				public toStandardMinutes(): org.joda.time.Minutes;
				public equals(param0: any): boolean;
				public negated(): org.joda.time.Seconds;
				public getValue(): number;
				public getFieldType(): org.joda.time.DurationFieldType;
				public static parseSeconds(param0: string): org.joda.time.Seconds;
				public dividedBy(param0: number): org.joda.time.Seconds;
				public minus(param0: org.joda.time.Seconds): org.joda.time.Seconds;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public plus(param0: org.joda.time.Seconds): org.joda.time.Seconds;
				public static secondsIn(param0: org.joda.time.ReadableInterval): org.joda.time.Seconds;
				public getSeconds(): number;
				public toString(): string;
				public plus(param0: number): org.joda.time.Seconds;
				public size(): number;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public static secondsBetween(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial): org.joda.time.Seconds;
				public static seconds(param0: number): org.joda.time.Seconds;
				public isLessThan(param0: org.joda.time.Seconds): boolean;
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public multipliedBy(param0: number): org.joda.time.Seconds;
				public toStandardDays(): org.joda.time.Days;
				public isGreaterThan(param0: org.joda.time.Seconds): boolean;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class TimeOfDay extends org.joda.time.base.BasePartial implements org.joda.time.ReadablePartial, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.TimeOfDay>;
				public static MIDNIGHT: org.joda.time.TimeOfDay;
				public static HOUR_OF_DAY: number;
				public static MINUTE_OF_HOUR: number;
				public static SECOND_OF_MINUTE: number;
				public static MILLIS_OF_SECOND: number;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: org.joda.time.Chronology);
				public static fromMillisOfDay(param0: number, param1: org.joda.time.Chronology): org.joda.time.TimeOfDay;
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.TimeOfDay;
				public getValue(param0: number): number;
				public constructor(param0: number, param1: number, param2: org.joda.time.Chronology);
				public minuteOfHour(): org.joda.time.TimeOfDay.Property;
				public static fromDateFields(param0: java.util.Date): org.joda.time.TimeOfDay;
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public getHourOfDay(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public plusHours(param0: number): org.joda.time.TimeOfDay;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public constructor(param0: number, param1: number, param2: number, param3: org.joda.time.Chronology);
				public toString(param0: string, param1: java.util.Locale): string;
				public withPeriodAdded(param0: org.joda.time.ReadablePeriod, param1: number): org.joda.time.TimeOfDay;
				public toLocalTime(): org.joda.time.LocalTime;
				public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.TimeOfDay;
				public withMinuteOfHour(param0: number): org.joda.time.TimeOfDay;
				public constructor(param0: number[], param1: org.joda.time.Chronology);
				public constructor(param0: org.joda.time.base.BasePartial, param1: org.joda.time.Chronology);
				public withSecondOfMinute(param0: number): org.joda.time.TimeOfDay;
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public hourOfDay(): org.joda.time.TimeOfDay.Property;
				public toString(): string;
				public size(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.TimeOfDay;
				public minusHours(param0: number): org.joda.time.TimeOfDay;
				public toDateTimeToday(): org.joda.time.DateTime;
				public constructor(param0: any);
				public minusMillis(param0: number): org.joda.time.TimeOfDay;
				public constructor(param0: number, param1: number, param2: number);
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.TimeOfDay.Property;
				public constructor(param0: org.joda.time.DateTimeZone);
				public getSecondOfMinute(): number;
				public getMinuteOfHour(): number;
				public secondOfMinute(): org.joda.time.TimeOfDay.Property;
				public constructor(param0: org.joda.time.Chronology);
				public getField(param0: number): org.joda.time.DateTimeField;
				public constructor(param0: any, param1: org.joda.time.Chronology, param2: org.joda.time.format.DateTimeFormatter);
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public getChronology(): org.joda.time.Chronology;
				public plusSeconds(param0: number): org.joda.time.TimeOfDay;
				public static fromCalendarFields(param0: java.util.Calendar): org.joda.time.TimeOfDay;
				public toDateTimeToday(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public getFieldTypes(): org.joda.time.DateTimeFieldType[];
				public constructor(param0: org.joda.time.base.BasePartial, param1: number[]);
				public withMillisOfSecond(param0: number): org.joda.time.TimeOfDay;
				public plusMinutes(param0: number): org.joda.time.TimeOfDay;
				public static fromMillisOfDay(param0: number): org.joda.time.TimeOfDay;
				public withField(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.TimeOfDay;
				public withHourOfDay(param0: number): org.joda.time.TimeOfDay;
				public withChronologyRetainFields(param0: org.joda.time.Chronology): org.joda.time.TimeOfDay;
				public minusMinutes(param0: number): org.joda.time.TimeOfDay;
				public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				public getMillisOfSecond(): number;
				public millisOfSecond(): org.joda.time.TimeOfDay.Property;
				public plusMillis(param0: number): org.joda.time.TimeOfDay;
				public toString(param0: string): string;
				public constructor(param0: number);
				public minusSeconds(param0: number): org.joda.time.TimeOfDay;
			}
			export module TimeOfDay {
				export class Property extends org.joda.time.field.AbstractPartialFieldProperty implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.TimeOfDay.Property>;
					public setCopy(param0: number): org.joda.time.TimeOfDay;
					public withMinimumValue(): org.joda.time.TimeOfDay;
					public getField(): org.joda.time.DateTimeField;
					public setCopy(param0: string, param1: java.util.Locale): org.joda.time.TimeOfDay;
					public getTimeOfDay(): org.joda.time.TimeOfDay;
					public addWrapFieldToCopy(param0: number): org.joda.time.TimeOfDay;
					public addNoWrapToCopy(param0: number): org.joda.time.TimeOfDay;
					public setCopy(param0: string): org.joda.time.TimeOfDay;
					public get(): number;
					public getReadablePartial(): org.joda.time.ReadablePartial;
					public withMaximumValue(): org.joda.time.TimeOfDay;
					public addToCopy(param0: number): org.joda.time.TimeOfDay;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class UTCDateTimeZone extends org.joda.time.DateTimeZone {
				public static class: java.lang.Class<org.joda.time.UTCDateTimeZone>;
				public toTimeZone(): java.util.TimeZone;
				public getOffsetFromLocal(param0: number): number;
				public getNameKey(param0: number): string;
				public constructor(param0: string);
				public constructor();
				public isFixed(): boolean;
				public nextTransition(param0: number): number;
				public hashCode(): number;
				public previousTransition(param0: number): number;
				public getOffset(param0: org.joda.time.ReadableInstant): number;
				public equals(param0: any): boolean;
				public getStandardOffset(param0: number): number;
				public getOffset(param0: number): number;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Weeks extends org.joda.time.base.BaseSingleFieldPeriod {
				public static class: java.lang.Class<org.joda.time.Weeks>;
				public static ZERO: org.joda.time.Weeks;
				public static ONE: org.joda.time.Weeks;
				public static TWO: org.joda.time.Weeks;
				public static THREE: org.joda.time.Weeks;
				public static MAX_VALUE: org.joda.time.Weeks;
				public static MIN_VALUE: org.joda.time.Weeks;
				public toStandardHours(): org.joda.time.Hours;
				public dividedBy(param0: number): org.joda.time.Weeks;
				public multipliedBy(param0: number): org.joda.time.Weeks;
				public toStandardDuration(): org.joda.time.Duration;
				public minus(param0: org.joda.time.Weeks): org.joda.time.Weeks;
				public getPeriodType(): org.joda.time.PeriodType;
				public getWeeks(): number;
				public get(param0: org.joda.time.DurationFieldType): number;
				public getValue(param0: number): number;
				public plus(param0: org.joda.time.Weeks): org.joda.time.Weeks;
				public static weeksIn(param0: org.joda.time.ReadableInterval): org.joda.time.Weeks;
				public static weeksBetween(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): org.joda.time.Weeks;
				public negated(): org.joda.time.Weeks;
				public toPeriod(): org.joda.time.Period;
				public hashCode(): number;
				public minus(param0: number): org.joda.time.Weeks;
				public toStandardMinutes(): org.joda.time.Minutes;
				public isGreaterThan(param0: org.joda.time.Weeks): boolean;
				public equals(param0: any): boolean;
				public static weeks(param0: number): org.joda.time.Weeks;
				public plus(param0: number): org.joda.time.Weeks;
				public getValue(): number;
				public getFieldType(): org.joda.time.DurationFieldType;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public toString(): string;
				public static parseWeeks(param0: string): org.joda.time.Weeks;
				public size(): number;
				public static standardWeeksIn(param0: org.joda.time.ReadablePeriod): org.joda.time.Weeks;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public static weeksBetween(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial): org.joda.time.Weeks;
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public isLessThan(param0: org.joda.time.Weeks): boolean;
				public toStandardDays(): org.joda.time.Days;
				public toStandardSeconds(): org.joda.time.Seconds;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class YearMonth extends org.joda.time.base.BasePartial implements org.joda.time.ReadablePartial, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.YearMonth>;
				public static YEAR: number;
				public static MONTH_OF_YEAR: number;
				public constructor(param0: number, param1: number);
				public toInterval(param0: org.joda.time.DateTimeZone): org.joda.time.Interval;
				public withYear(param0: number): org.joda.time.YearMonth;
				public static fromDateFields(param0: java.util.Date): org.joda.time.YearMonth;
				public getValue(param0: number): number;
				public constructor(param0: number, param1: number, param2: org.joda.time.Chronology);
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public withField(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.YearMonth;
				public minusYears(param0: number): org.joda.time.YearMonth;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public plusMonths(param0: number): org.joda.time.YearMonth;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public toString(param0: string, param1: java.util.Locale): string;
				public withPeriodAdded(param0: org.joda.time.ReadablePeriod, param1: number): org.joda.time.YearMonth;
				public getMonthOfYear(): number;
				public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
				public minusMonths(param0: number): org.joda.time.YearMonth;
				public withChronologyRetainFields(param0: org.joda.time.Chronology): org.joda.time.YearMonth;
				public plusYears(param0: number): org.joda.time.YearMonth;
				public toInterval(): org.joda.time.Interval;
				public constructor(param0: number[], param1: org.joda.time.Chronology);
				public constructor(param0: org.joda.time.base.BasePartial, param1: org.joda.time.Chronology);
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public toString(): string;
				public size(): number;
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.YearMonth;
				public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
				public year(): org.joda.time.YearMonth.Property;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public toLocalDate(param0: number): org.joda.time.LocalDate;
				public constructor(param0: any);
				public static fromCalendarFields(param0: java.util.Calendar): org.joda.time.YearMonth;
				public withMonthOfYear(param0: number): org.joda.time.YearMonth;
				public constructor(param0: org.joda.time.DateTimeZone);
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.YearMonth.Property;
				public constructor(param0: org.joda.time.Chronology);
				public getField(param0: number): org.joda.time.DateTimeField;
				public getYear(): number;
				public constructor(param0: any, param1: org.joda.time.Chronology, param2: org.joda.time.format.DateTimeFormatter);
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public getChronology(): org.joda.time.Chronology;
				public static now(): org.joda.time.YearMonth;
				public getFieldTypes(): org.joda.time.DateTimeFieldType[];
				public static now(param0: org.joda.time.DateTimeZone): org.joda.time.YearMonth;
				public constructor(param0: org.joda.time.base.BasePartial, param1: number[]);
				public static now(param0: org.joda.time.Chronology): org.joda.time.YearMonth;
				public static parse(param0: string): org.joda.time.YearMonth;
				public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.YearMonth;
				public toString(param0: string): string;
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.YearMonth;
				public monthOfYear(): org.joda.time.YearMonth.Property;
				public constructor(param0: number);
				public static parse(param0: string, param1: org.joda.time.format.DateTimeFormatter): org.joda.time.YearMonth;
			}
			export module YearMonth {
				export class Property extends org.joda.time.field.AbstractPartialFieldProperty implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.YearMonth.Property>;
					public getYearMonth(): org.joda.time.YearMonth;
					public getField(): org.joda.time.DateTimeField;
					public addToCopy(param0: number): org.joda.time.YearMonth;
					public addWrapFieldToCopy(param0: number): org.joda.time.YearMonth;
					public get(): number;
					public setCopy(param0: string, param1: java.util.Locale): org.joda.time.YearMonth;
					public setCopy(param0: string): org.joda.time.YearMonth;
					public getReadablePartial(): org.joda.time.ReadablePartial;
					public setCopy(param0: number): org.joda.time.YearMonth;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class YearMonthDay extends org.joda.time.base.BasePartial implements org.joda.time.ReadablePartial, java.io.Serializable {
				public static class: java.lang.Class<org.joda.time.YearMonthDay>;
				public static YEAR: number;
				public static MONTH_OF_YEAR: number;
				public static DAY_OF_MONTH: number;
				public toInterval(param0: org.joda.time.DateTimeZone): org.joda.time.Interval;
				public plus(param0: org.joda.time.ReadablePeriod): org.joda.time.YearMonthDay;
				public year(): org.joda.time.YearMonthDay.Property;
				public minusDays(param0: number): org.joda.time.YearMonthDay;
				public getValue(param0: number): number;
				public constructor(param0: any, param1: org.joda.time.Chronology);
				public constructor();
				public hashCode(): number;
				public equals(param0: any): boolean;
				public withPeriodAdded(param0: org.joda.time.ReadablePeriod, param1: number): org.joda.time.YearMonthDay;
				public get(param0: org.joda.time.DateTimeFieldType): number;
				public constructor(param0: number, param1: number, param2: number, param3: org.joda.time.Chronology);
				public toString(param0: string, param1: java.util.Locale): string;
				public toDateTime(param0: org.joda.time.TimeOfDay, param1: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public getMonthOfYear(): number;
				public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
				public toDateMidnight(): org.joda.time.DateMidnight;
				public minusMonths(param0: number): org.joda.time.YearMonthDay;
				public toInterval(): org.joda.time.Interval;
				public constructor(param0: number[], param1: org.joda.time.Chronology);
				public constructor(param0: org.joda.time.base.BasePartial, param1: org.joda.time.Chronology);
				public withFieldAdded(param0: org.joda.time.DurationFieldType, param1: number): org.joda.time.YearMonthDay;
				public constructor(param0: number, param1: org.joda.time.Chronology);
				public toString(): string;
				public plusMonths(param0: number): org.joda.time.YearMonthDay;
				public size(): number;
				public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
				public withDayOfMonth(param0: number): org.joda.time.YearMonthDay;
				public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
				public constructor(param0: any);
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.joda.time.DateTimeZone);
				public getDayOfMonth(): number;
				public constructor(param0: org.joda.time.Chronology);
				public getField(param0: number): org.joda.time.DateTimeField;
				public getYear(): number;
				public withMonthOfYear(param0: number): org.joda.time.YearMonthDay;
				public static fromDateFields(param0: java.util.Date): org.joda.time.YearMonthDay;
				public plusDays(param0: number): org.joda.time.YearMonthDay;
				public monthOfYear(): org.joda.time.YearMonthDay.Property;
				public constructor(param0: any, param1: org.joda.time.Chronology, param2: org.joda.time.format.DateTimeFormatter);
				public property(param0: org.joda.time.DateTimeFieldType): org.joda.time.YearMonthDay.Property;
				public toString(param0: org.joda.time.format.DateTimeFormatter): string;
				public getChronology(): org.joda.time.Chronology;
				public toDateTimeAtCurrentTime(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public minus(param0: org.joda.time.ReadablePeriod): org.joda.time.YearMonthDay;
				public toDateTimeAtMidnight(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
				public toDateTimeAtCurrentTime(): org.joda.time.DateTime;
				public getFieldTypes(): org.joda.time.DateTimeFieldType[];
				public plusYears(param0: number): org.joda.time.YearMonthDay;
				public withField(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.YearMonthDay;
				public constructor(param0: org.joda.time.base.BasePartial, param1: number[]);
				public static fromCalendarFields(param0: java.util.Calendar): org.joda.time.YearMonthDay;
				public toDateTimeAtMidnight(): org.joda.time.DateTime;
				public withYear(param0: number): org.joda.time.YearMonthDay;
				public dayOfMonth(): org.joda.time.YearMonthDay.Property;
				public toDateMidnight(param0: org.joda.time.DateTimeZone): org.joda.time.DateMidnight;
				public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				public toDateTime(param0: org.joda.time.TimeOfDay): org.joda.time.DateTime;
				public withChronologyRetainFields(param0: org.joda.time.Chronology): org.joda.time.YearMonthDay;
				public minusYears(param0: number): org.joda.time.YearMonthDay;
				public toString(param0: string): string;
				public toLocalDate(): org.joda.time.LocalDate;
				public constructor(param0: number);
			}
			export module YearMonthDay {
				export class Property extends org.joda.time.field.AbstractPartialFieldProperty implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.YearMonthDay.Property>;
					public setCopy(param0: string): org.joda.time.YearMonthDay;
					public getField(): org.joda.time.DateTimeField;
					public addToCopy(param0: number): org.joda.time.YearMonthDay;
					public setCopy(param0: string, param1: java.util.Locale): org.joda.time.YearMonthDay;
					public getYearMonthDay(): org.joda.time.YearMonthDay;
					public get(): number;
					public setCopy(param0: number): org.joda.time.YearMonthDay;
					public withMinimumValue(): org.joda.time.YearMonthDay;
					public getReadablePartial(): org.joda.time.ReadablePartial;
					public withMaximumValue(): org.joda.time.YearMonthDay;
					public addWrapFieldToCopy(param0: number): org.joda.time.YearMonthDay;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export class Years extends org.joda.time.base.BaseSingleFieldPeriod {
				public static class: java.lang.Class<org.joda.time.Years>;
				public static ZERO: org.joda.time.Years;
				public static ONE: org.joda.time.Years;
				public static TWO: org.joda.time.Years;
				public static THREE: org.joda.time.Years;
				public static MAX_VALUE: org.joda.time.Years;
				public static MIN_VALUE: org.joda.time.Years;
				public getPeriodType(): org.joda.time.PeriodType;
				public isLessThan(param0: org.joda.time.Years): boolean;
				public plus(param0: number): org.joda.time.Years;
				public get(param0: org.joda.time.DurationFieldType): number;
				public getValue(param0: number): number;
				public negated(): org.joda.time.Years;
				public static yearsBetween(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant): org.joda.time.Years;
				public minus(param0: number): org.joda.time.Years;
				public toPeriod(): org.joda.time.Period;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getYears(): number;
				public getValue(): number;
				public getFieldType(): org.joda.time.DurationFieldType;
				public multipliedBy(param0: number): org.joda.time.Years;
				public plus(param0: org.joda.time.Years): org.joda.time.Years;
				public isGreaterThan(param0: org.joda.time.Years): boolean;
				public toMutablePeriod(): org.joda.time.MutablePeriod;
				public dividedBy(param0: number): org.joda.time.Years;
				public minus(param0: org.joda.time.Years): org.joda.time.Years;
				public toString(): string;
				public size(): number;
				public static parseYears(param0: string): org.joda.time.Years;
				public isSupported(param0: org.joda.time.DurationFieldType): boolean;
				public static yearsBetween(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial): org.joda.time.Years;
				public getFieldType(param0: number): org.joda.time.DurationFieldType;
				public static yearsIn(param0: org.joda.time.ReadableInterval): org.joda.time.Years;
				public static years(param0: number): org.joda.time.Years;
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class AbstractDateTime extends org.joda.time.base.AbstractInstant implements org.joda.time.ReadableDateTime {
					public static class: java.lang.Class<org.joda.time.base.AbstractDateTime>;
					public get(param0: org.joda.time.DateTimeField): number;
					public getMinuteOfDay(): number;
					public toString(param0: string, param1: java.util.Locale): string;
					public getMillisOfSecond(): number;
					public toGregorianCalendar(): java.util.GregorianCalendar;
					public isAfter(param0: number): boolean;
					public toDateTime(): org.joda.time.DateTime;
					public toDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
					public toMutableDateTime(param0: org.joda.time.Chronology): org.joda.time.MutableDateTime;
					public toInstant(): org.joda.time.Instant;
					public toString(): string;
					public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					public constructor();
					public getSecondOfDay(): number;
					public getCenturyOfEra(): number;
					public getMillis(): number;
					public get(param0: org.joda.time.DateTimeFieldType): number;
					public toString(param0: org.joda.time.format.DateTimeFormatter): string;
					public toMutableDateTime(): org.joda.time.MutableDateTime;
					public isAfter(param0: org.joda.time.ReadableInstant): boolean;
					public isEqual(param0: number): boolean;
					public hashCode(): number;
					public getDayOfYear(): number;
					public getChronology(): org.joda.time.Chronology;
					public getYearOfCentury(): number;
					public getYearOfEra(): number;
					public getDayOfMonth(): number;
					public toCalendar(param0: java.util.Locale): java.util.Calendar;
					public getHourOfDay(): number;
					public isEqual(param0: org.joda.time.ReadableInstant): boolean;
					public getEra(): number;
					public getZone(): org.joda.time.DateTimeZone;
					public equals(param0: any): boolean;
					public getYear(): number;
					public getMonthOfYear(): number;
					public getMillisOfDay(): number;
					public getSecondOfMinute(): number;
					public getDayOfWeek(): number;
					public getMinuteOfHour(): number;
					public toString(param0: string): string;
					public getWeekyear(): number;
					public getWeekOfWeekyear(): number;
					public isBefore(param0: org.joda.time.ReadableInstant): boolean;
					public toDateTime(param0: org.joda.time.Chronology): org.joda.time.DateTime;
					public isBefore(param0: number): boolean;
					public toMutableDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.MutableDateTime;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class AbstractDuration extends java.lang.Object implements org.joda.time.ReadableDuration {
					public static class: java.lang.Class<org.joda.time.base.AbstractDuration>;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public constructor();
					public toPeriod(): org.joda.time.Period;
					public getMillis(): number;
					public toDuration(): org.joda.time.Duration;
					public compareTo(param0: org.joda.time.ReadableDuration): number;
					public hashCode(): number;
					public isLongerThan(param0: org.joda.time.ReadableDuration): boolean;
					public isShorterThan(param0: org.joda.time.ReadableDuration): boolean;
					public isEqual(param0: org.joda.time.ReadableDuration): boolean;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class AbstractInstant extends java.lang.Object implements org.joda.time.ReadableInstant {
					public static class: java.lang.Class<org.joda.time.base.AbstractInstant>;
					public toDate(): java.util.Date;
					public isBeforeNow(): boolean;
					public get(param0: org.joda.time.DateTimeField): number;
					public equals(obj: any): boolean;
					public isAfter(param0: number): boolean;
					public toDateTime(): org.joda.time.DateTime;
					public toDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
					public toInstant(): org.joda.time.Instant;
					public toMutableDateTime(param0: org.joda.time.Chronology): org.joda.time.MutableDateTime;
					public toString(): string;
					public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					public constructor();
					public getMillis(): number;
					public get(param0: org.joda.time.DateTimeFieldType): number;
					public toString(param0: org.joda.time.format.DateTimeFormatter): string;
					public toMutableDateTime(): org.joda.time.MutableDateTime;
					public isAfter(param0: org.joda.time.ReadableInstant): boolean;
					public toMutableDateTimeISO(): org.joda.time.MutableDateTime;
					public hashCode(): number;
					public isEqual(param0: number): boolean;
					public getChronology(): org.joda.time.Chronology;
					public isAfterNow(): boolean;
					public isEqual(param0: org.joda.time.ReadableInstant): boolean;
					public getZone(): org.joda.time.DateTimeZone;
					public toDateTimeISO(): org.joda.time.DateTime;
					public equals(param0: any): boolean;
					public isEqualNow(): boolean;
					public isBefore(param0: org.joda.time.ReadableInstant): boolean;
					public toDateTime(param0: org.joda.time.Chronology): org.joda.time.DateTime;
					public isBefore(param0: number): boolean;
					public toMutableDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.MutableDateTime;
					public compareTo(param0: org.joda.time.ReadableInstant): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class AbstractInterval extends java.lang.Object implements org.joda.time.ReadableInterval {
					public static class: java.lang.Class<org.joda.time.base.AbstractInterval>;
					public isBeforeNow(): boolean;
					public equals(obj: any): boolean;
					public isAfter(param0: number): boolean;
					public toDuration(): org.joda.time.Duration;
					public getEnd(): org.joda.time.DateTime;
					public getStart(): org.joda.time.DateTime;
					public toString(): string;
					public constructor();
					public contains(param0: number): boolean;
					public isAfter(param0: org.joda.time.ReadableInstant): boolean;
					public contains(param0: org.joda.time.ReadableInstant): boolean;
					public isEqual(param0: org.joda.time.ReadableInterval): boolean;
					public hashCode(): number;
					public getChronology(): org.joda.time.Chronology;
					public toDurationMillis(): number;
					public toPeriod(param0: org.joda.time.PeriodType): org.joda.time.Period;
					public isAfterNow(): boolean;
					public toMutableInterval(): org.joda.time.MutableInterval;
					public toInterval(): org.joda.time.Interval;
					public getEndMillis(): number;
					public overlaps(param0: org.joda.time.ReadableInterval): boolean;
					public equals(param0: any): boolean;
					public contains(param0: org.joda.time.ReadableInterval): boolean;
					public isAfter(param0: org.joda.time.ReadableInterval): boolean;
					public containsNow(): boolean;
					public toPeriod(): org.joda.time.Period;
					public checkInterval(param0: number, param1: number): void;
					public isBefore(param0: org.joda.time.ReadableInstant): boolean;
					public isBefore(param0: org.joda.time.ReadableInterval): boolean;
					public getStartMillis(): number;
					public isBefore(param0: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class AbstractPartial extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.base.AbstractPartial>;
					public equals(obj: any): boolean;
					public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
					public indexOf(param0: org.joda.time.DateTimeFieldType): number;
					public indexOf(param0: org.joda.time.DurationFieldType): number;
					public size(): number;
					public compareTo(param0: org.joda.time.ReadablePartial): number;
					public getField(param0: number): org.joda.time.DateTimeField;
					public getFieldTypes(): org.joda.time.DateTimeFieldType[];
					public toString(): string;
					public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					public isEqual(param0: org.joda.time.ReadablePartial): boolean;
					public constructor();
					public getFields(): org.joda.time.DateTimeField[];
					public get(param0: org.joda.time.DateTimeFieldType): number;
					public indexOfSupported(param0: org.joda.time.DateTimeFieldType): number;
					public toString(param0: org.joda.time.format.DateTimeFormatter): string;
					public hashCode(): number;
					public getChronology(): org.joda.time.Chronology;
					public isBefore(param0: org.joda.time.ReadablePartial): boolean;
					public equals(param0: any): boolean;
					public getValue(param0: number): number;
					public indexOfSupported(param0: org.joda.time.DurationFieldType): number;
					public isAfter(param0: org.joda.time.ReadablePartial): boolean;
					public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
					public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
					public getValues(): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class AbstractPeriod extends java.lang.Object implements org.joda.time.ReadablePeriod {
					public static class: java.lang.Class<org.joda.time.base.AbstractPeriod>;
					public equals(obj: any): boolean;
					public indexOf(param0: org.joda.time.DurationFieldType): number;
					public size(): number;
					public getPeriodType(): org.joda.time.PeriodType;
					public getFieldType(param0: number): org.joda.time.DurationFieldType;
					public get(param0: org.joda.time.DurationFieldType): number;
					public getFieldTypes(): org.joda.time.DurationFieldType[];
					public equals(param0: any): boolean;
					public toString(): string;
					public isSupported(param0: org.joda.time.DurationFieldType): boolean;
					public getValue(param0: number): number;
					public constructor();
					public toPeriod(): org.joda.time.Period;
					public toMutablePeriod(): org.joda.time.MutablePeriod;
					public toString(param0: org.joda.time.format.PeriodFormatter): string;
					public hashCode(): number;
					public getValues(): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class BaseDateTime extends org.joda.time.base.AbstractDateTime implements org.joda.time.ReadableDateTime, java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.base.BaseDateTime>;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
					public getMinuteOfDay(): number;
					public get(param0: org.joda.time.DateTimeField): number;
					public toMutableDateTime(param0: org.joda.time.Chronology): org.joda.time.MutableDateTime;
					public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					public constructor();
					public getCenturyOfEra(): number;
					public toString(param0: org.joda.time.format.DateTimeFormatter): string;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: org.joda.time.Chronology);
					public constructor(param0: org.joda.time.Chronology);
					public isAfter(param0: org.joda.time.ReadableInstant): boolean;
					public constructor(param0: number, param1: org.joda.time.DateTimeZone);
					public isEqual(param0: number): boolean;
					public constructor(param0: number, param1: org.joda.time.Chronology);
					public setChronology(param0: org.joda.time.Chronology): void;
					public getHourOfDay(): number;
					public getEra(): number;
					public getMonthOfYear(): number;
					public getMillisOfDay(): number;
					public getMinuteOfHour(): number;
					public constructor(param0: any, param1: org.joda.time.DateTimeZone);
					public toString(param0: string): string;
					public toDateTime(param0: org.joda.time.Chronology): org.joda.time.DateTime;
					public constructor(param0: org.joda.time.DateTimeZone);
					public toString(param0: string, param1: java.util.Locale): string;
					public getMillisOfSecond(): number;
					public isAfter(param0: number): boolean;
					public toDateTime(): org.joda.time.DateTime;
					public toDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.DateTime;
					public checkInstant(param0: number, param1: org.joda.time.Chronology): number;
					public toInstant(): org.joda.time.Instant;
					public toString(): string;
					public getSecondOfDay(): number;
					public getMillis(): number;
					public get(param0: org.joda.time.DateTimeFieldType): number;
					public constructor(param0: any, param1: org.joda.time.Chronology);
					public toMutableDateTime(): org.joda.time.MutableDateTime;
					public setMillis(param0: number): void;
					public hashCode(): number;
					public getChronology(): org.joda.time.Chronology;
					public getDayOfYear(): number;
					public constructor(param0: number);
					public getYearOfCentury(): number;
					public getYearOfEra(): number;
					public getDayOfMonth(): number;
					public checkChronology(param0: org.joda.time.Chronology): org.joda.time.Chronology;
					public isEqual(param0: org.joda.time.ReadableInstant): boolean;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: org.joda.time.DateTimeZone);
					public getZone(): org.joda.time.DateTimeZone;
					public equals(param0: any): boolean;
					public getYear(): number;
					public getSecondOfMinute(): number;
					public getDayOfWeek(): number;
					public getWeekyear(): number;
					public getWeekOfWeekyear(): number;
					public isBefore(param0: org.joda.time.ReadableInstant): boolean;
					public isBefore(param0: number): boolean;
					public toMutableDateTime(param0: org.joda.time.DateTimeZone): org.joda.time.MutableDateTime;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class BaseDuration extends org.joda.time.base.AbstractDuration implements org.joda.time.ReadableDuration, java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.base.BaseDuration>;
					public toPeriod(param0: org.joda.time.PeriodType): org.joda.time.Period;
					public toPeriod(param0: org.joda.time.PeriodType, param1: org.joda.time.Chronology): org.joda.time.Period;
					public toPeriodTo(param0: org.joda.time.ReadableInstant): org.joda.time.Period;
					public constructor(param0: any);
					public toPeriodFrom(param0: org.joda.time.ReadableInstant): org.joda.time.Period;
					public toDuration(): org.joda.time.Duration;
					public toIntervalFrom(param0: org.joda.time.ReadableInstant): org.joda.time.Interval;
					public isShorterThan(param0: org.joda.time.ReadableDuration): boolean;
					public equals(param0: any): boolean;
					public toIntervalTo(param0: org.joda.time.ReadableInstant): org.joda.time.Interval;
					public toString(): string;
					public toPeriodFrom(param0: org.joda.time.ReadableInstant, param1: org.joda.time.PeriodType): org.joda.time.Period;
					public constructor();
					public toPeriod(param0: org.joda.time.Chronology): org.joda.time.Period;
					public toPeriodTo(param0: org.joda.time.ReadableInstant, param1: org.joda.time.PeriodType): org.joda.time.Period;
					public toPeriod(): org.joda.time.Period;
					public getMillis(): number;
					public setMillis(param0: number): void;
					public hashCode(): number;
					public isLongerThan(param0: org.joda.time.ReadableDuration): boolean;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant);
					public isEqual(param0: org.joda.time.ReadableDuration): boolean;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class BaseInterval extends org.joda.time.base.AbstractInterval implements org.joda.time.ReadableInterval, java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.base.BaseInterval>;
					public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadablePeriod);
					public setInterval(param0: number, param1: number, param2: org.joda.time.Chronology): void;
					public isAfter(param0: number): boolean;
					public toDuration(): org.joda.time.Duration;
					public getEnd(): org.joda.time.DateTime;
					public getStart(): org.joda.time.DateTime;
					public toString(): string;
					public constructor();
					public contains(param0: number): boolean;
					public constructor(param0: any, param1: org.joda.time.Chronology);
					public isAfter(param0: org.joda.time.ReadableInstant): boolean;
					public contains(param0: org.joda.time.ReadableInstant): boolean;
					public hashCode(): number;
					public getChronology(): org.joda.time.Chronology;
					public toDurationMillis(): number;
					public constructor(param0: number, param1: number, param2: org.joda.time.Chronology);
					public constructor(param0: org.joda.time.ReadablePeriod, param1: org.joda.time.ReadableInstant);
					public toPeriod(param0: org.joda.time.PeriodType): org.joda.time.Period;
					public constructor(param0: org.joda.time.ReadableDuration, param1: org.joda.time.ReadableInstant);
					public toMutableInterval(): org.joda.time.MutableInterval;
					public toInterval(): org.joda.time.Interval;
					public getEndMillis(): number;
					public overlaps(param0: org.joda.time.ReadableInterval): boolean;
					public equals(param0: any): boolean;
					public contains(param0: org.joda.time.ReadableInterval): boolean;
					public isAfter(param0: org.joda.time.ReadableInterval): boolean;
					public toPeriod(): org.joda.time.Period;
					public getStartMillis(): number;
					public isBefore(param0: org.joda.time.ReadableInstant): boolean;
					public isBefore(param0: org.joda.time.ReadableInterval): boolean;
					public isBefore(param0: number): boolean;
					public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableDuration);
					public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant);
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class BaseLocal extends org.joda.time.base.AbstractPartial {
					public static class: java.lang.Class<org.joda.time.base.BaseLocal>;
					public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
					public size(): number;
					public getField(param0: number): org.joda.time.DateTimeField;
					public equals(param0: any): boolean;
					public toString(): string;
					public getValue(param0: number): number;
					public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					public constructor();
					public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
					public get(param0: org.joda.time.DateTimeFieldType): number;
					public toString(param0: org.joda.time.format.DateTimeFormatter): string;
					public hashCode(): number;
					public getChronology(): org.joda.time.Chronology;
					public getLocalMillis(): number;
					public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class BasePartial extends org.joda.time.base.AbstractPartial implements org.joda.time.ReadablePartial, java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.base.BasePartial>;
					public setValues(param0: number[]): void;
					public toString(param0: string, param1: java.util.Locale): string;
					public getField(param0: number, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
					public constructor(param0: any, param1: org.joda.time.Chronology, param2: org.joda.time.format.DateTimeFormatter);
					public constructor(param0: org.joda.time.base.BasePartial, param1: org.joda.time.Chronology);
					public size(): number;
					public getField(param0: number): org.joda.time.DateTimeField;
					public toString(): string;
					public isSupported(param0: org.joda.time.DateTimeFieldType): boolean;
					public constructor();
					public toString(param0: org.joda.time.format.DateTimeFormatter): string;
					public get(param0: org.joda.time.DateTimeFieldType): number;
					public constructor(param0: any, param1: org.joda.time.Chronology);
					public constructor(param0: org.joda.time.Chronology);
					public hashCode(): number;
					public getChronology(): org.joda.time.Chronology;
					public constructor(param0: number);
					public constructor(param0: number, param1: org.joda.time.Chronology);
					public setValue(param0: number, param1: number): void;
					public constructor(param0: number[], param1: org.joda.time.Chronology);
					public constructor(param0: org.joda.time.base.BasePartial, param1: number[]);
					public equals(param0: any): boolean;
					public getValue(param0: number): number;
					public toString(param0: string): string;
					public toDateTime(param0: org.joda.time.ReadableInstant): org.joda.time.DateTime;
					public getValues(): number[];
					public getFieldType(param0: number): org.joda.time.DateTimeFieldType;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class BasePeriod extends org.joda.time.base.AbstractPeriod implements org.joda.time.ReadablePeriod, java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.base.BasePeriod>;
					public setValues(param0: number[]): void;
					public mergePeriodInto(param0: number[], param1: org.joda.time.ReadablePeriod): number[];
					public constructor(param0: number[], param1: org.joda.time.PeriodType);
					public size(): number;
					public get(param0: org.joda.time.DurationFieldType): number;
					public toString(): string;
					public toDurationTo(param0: org.joda.time.ReadableInstant): org.joda.time.Duration;
					public constructor();
					public toMutablePeriod(): org.joda.time.MutablePeriod;
					public constructor(param0: number, param1: number, param2: org.joda.time.PeriodType, param3: org.joda.time.Chronology);
					public hashCode(): number;
					public constructor(param0: any, param1: org.joda.time.PeriodType, param2: org.joda.time.Chronology);
					public constructor(param0: number);
					public setField(param0: org.joda.time.DurationFieldType, param1: number): void;
					public checkPeriodType(param0: org.joda.time.PeriodType): org.joda.time.PeriodType;
					public setValue(param0: number, param1: number): void;
					public addFieldInto(param0: number[], param1: org.joda.time.DurationFieldType, param2: number): void;
					public addPeriod(param0: org.joda.time.ReadablePeriod): void;
					public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant, param2: org.joda.time.PeriodType);
					public constructor(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableDuration, param2: org.joda.time.PeriodType);
					public getPeriodType(): org.joda.time.PeriodType;
					public getFieldType(param0: number): org.joda.time.DurationFieldType;
					public setFieldInto(param0: number[], param1: org.joda.time.DurationFieldType, param2: number): void;
					public addField(param0: org.joda.time.DurationFieldType, param1: number): void;
					public constructor(param0: org.joda.time.ReadableDuration, param1: org.joda.time.ReadableInstant, param2: org.joda.time.PeriodType);
					public constructor(param0: number, param1: org.joda.time.PeriodType, param2: org.joda.time.Chronology);
					public addPeriodInto(param0: number[], param1: org.joda.time.ReadablePeriod): number[];
					public equals(param0: any): boolean;
					public setPeriod(param0: org.joda.time.ReadablePeriod): void;
					public getValue(param0: number): number;
					public isSupported(param0: org.joda.time.DurationFieldType): boolean;
					public toPeriod(): org.joda.time.Period;
					public constructor(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial, param2: org.joda.time.PeriodType);
					public toString(param0: org.joda.time.format.PeriodFormatter): string;
					public toDurationFrom(param0: org.joda.time.ReadableInstant): org.joda.time.Duration;
					public mergePeriod(param0: org.joda.time.ReadablePeriod): void;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: org.joda.time.PeriodType);
					public setPeriod(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module base {
				export abstract class BaseSingleFieldPeriod extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.base.BaseSingleFieldPeriod>;
					public getFieldType(): org.joda.time.DurationFieldType;
					public equals(obj: any): boolean;
					public size(): number;
					public getPeriodType(): org.joda.time.PeriodType;
					public getFieldType(param0: number): org.joda.time.DurationFieldType;
					public get(param0: org.joda.time.DurationFieldType): number;
					public static standardPeriodIn(param0: org.joda.time.ReadablePeriod, param1: number): number;
					public equals(param0: any): boolean;
					public toString(): string;
					public getValue(param0: number): number;
					public isSupported(param0: org.joda.time.DurationFieldType): boolean;
					public getValue(): number;
					public toPeriod(): org.joda.time.Period;
					public toMutablePeriod(): org.joda.time.MutablePeriod;
					public static between(param0: org.joda.time.ReadablePartial, param1: org.joda.time.ReadablePartial, param2: org.joda.time.ReadablePeriod): number;
					public setValue(param0: number): void;
					public hashCode(): number;
					public static between(param0: org.joda.time.ReadableInstant, param1: org.joda.time.ReadableInstant, param2: org.joda.time.DurationFieldType): number;
					public constructor(param0: number);
					public compareTo(param0: org.joda.time.base.BaseSingleFieldPeriod): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export abstract class AssembledChronology extends org.joda.time.chrono.BaseChronology {
					public static class: java.lang.Class<org.joda.time.chrono.AssembledChronology>;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public weekOfWeekyear(): org.joda.time.DateTimeField;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public seconds(): org.joda.time.DurationField;
					public minuteOfDay(): org.joda.time.DateTimeField;
					public days(): org.joda.time.DurationField;
					public centuries(): org.joda.time.DurationField;
					public millisOfSecond(): org.joda.time.DateTimeField;
					public clockhourOfDay(): org.joda.time.DateTimeField;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number): number;
					public constructor();
					public weekyearOfCentury(): org.joda.time.DateTimeField;
					public year(): org.joda.time.DateTimeField;
					public getBase(): org.joda.time.Chronology;
					public monthOfYear(): org.joda.time.DateTimeField;
					public era(): org.joda.time.DateTimeField;
					public yearOfEra(): org.joda.time.DateTimeField;
					public hours(): org.joda.time.DurationField;
					public hourOfHalfday(): org.joda.time.DateTimeField;
					public years(): org.joda.time.DurationField;
					public constructor(param0: org.joda.time.Chronology, param1: any);
					public minutes(): org.joda.time.DurationField;
					public millis(): org.joda.time.DurationField;
					public hourOfDay(): org.joda.time.DateTimeField;
					public halfdays(): org.joda.time.DurationField;
					public minuteOfHour(): org.joda.time.DateTimeField;
					public weekyears(): org.joda.time.DurationField;
					public halfdayOfDay(): org.joda.time.DateTimeField;
					public dayOfYear(): org.joda.time.DateTimeField;
					public yearOfCentury(): org.joda.time.DateTimeField;
					public millisOfDay(): org.joda.time.DateTimeField;
					public dayOfMonth(): org.joda.time.DateTimeField;
					public getZone(): org.joda.time.DateTimeZone;
					public clockhourOfHalfday(): org.joda.time.DateTimeField;
					public weekyear(): org.joda.time.DateTimeField;
					public dayOfWeek(): org.joda.time.DateTimeField;
					public getParam(): any;
					public secondOfDay(): org.joda.time.DateTimeField;
					public centuryOfEra(): org.joda.time.DateTimeField;
					public secondOfMinute(): org.joda.time.DateTimeField;
					public eras(): org.joda.time.DurationField;
					public months(): org.joda.time.DurationField;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public weeks(): org.joda.time.DurationField;
				}
				export module AssembledChronology {
					export class Fields extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.chrono.AssembledChronology.Fields>;
						public millis: org.joda.time.DurationField;
						public seconds: org.joda.time.DurationField;
						public minutes: org.joda.time.DurationField;
						public hours: org.joda.time.DurationField;
						public halfdays: org.joda.time.DurationField;
						public days: org.joda.time.DurationField;
						public weeks: org.joda.time.DurationField;
						public weekyears: org.joda.time.DurationField;
						public months: org.joda.time.DurationField;
						public years: org.joda.time.DurationField;
						public centuries: org.joda.time.DurationField;
						public eras: org.joda.time.DurationField;
						public millisOfSecond: org.joda.time.DateTimeField;
						public millisOfDay: org.joda.time.DateTimeField;
						public secondOfMinute: org.joda.time.DateTimeField;
						public secondOfDay: org.joda.time.DateTimeField;
						public minuteOfHour: org.joda.time.DateTimeField;
						public minuteOfDay: org.joda.time.DateTimeField;
						public hourOfDay: org.joda.time.DateTimeField;
						public clockhourOfDay: org.joda.time.DateTimeField;
						public hourOfHalfday: org.joda.time.DateTimeField;
						public clockhourOfHalfday: org.joda.time.DateTimeField;
						public halfdayOfDay: org.joda.time.DateTimeField;
						public dayOfWeek: org.joda.time.DateTimeField;
						public dayOfMonth: org.joda.time.DateTimeField;
						public dayOfYear: org.joda.time.DateTimeField;
						public weekOfWeekyear: org.joda.time.DateTimeField;
						public weekyear: org.joda.time.DateTimeField;
						public weekyearOfCentury: org.joda.time.DateTimeField;
						public monthOfYear: org.joda.time.DateTimeField;
						public year: org.joda.time.DateTimeField;
						public yearOfEra: org.joda.time.DateTimeField;
						public yearOfCentury: org.joda.time.DateTimeField;
						public centuryOfEra: org.joda.time.DateTimeField;
						public era: org.joda.time.DateTimeField;
						public copyFieldsFrom(param0: org.joda.time.Chronology): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export abstract class BaseChronology extends org.joda.time.Chronology implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.chrono.BaseChronology>;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public get(param0: org.joda.time.ReadablePartial, param1: number): number[];
					public minuteOfDay(): org.joda.time.DateTimeField;
					public centuries(): org.joda.time.DurationField;
					public set(param0: org.joda.time.ReadablePartial, param1: number): number;
					public millisOfSecond(): org.joda.time.DateTimeField;
					public clockhourOfDay(): org.joda.time.DateTimeField;
					public constructor();
					public year(): org.joda.time.DateTimeField;
					public era(): org.joda.time.DateTimeField;
					public hourOfHalfday(): org.joda.time.DateTimeField;
					public years(): org.joda.time.DurationField;
					public minutes(): org.joda.time.DurationField;
					public withUTC(): org.joda.time.Chronology;
					public get(param0: org.joda.time.ReadablePeriod, param1: number): number[];
					public dayOfYear(): org.joda.time.DateTimeField;
					public yearOfCentury(): org.joda.time.DateTimeField;
					public millisOfDay(): org.joda.time.DateTimeField;
					public weekyear(): org.joda.time.DateTimeField;
					public secondOfDay(): org.joda.time.DateTimeField;
					public add(param0: number, param1: number, param2: number): number;
					public months(): org.joda.time.DurationField;
					public weekOfWeekyear(): org.joda.time.DateTimeField;
					public seconds(): org.joda.time.DurationField;
					public days(): org.joda.time.DurationField;
					public add(param0: org.joda.time.ReadablePeriod, param1: number, param2: number): number;
					public toString(): string;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number): number;
					public weekyearOfCentury(): org.joda.time.DateTimeField;
					public monthOfYear(): org.joda.time.DateTimeField;
					public yearOfEra(): org.joda.time.DateTimeField;
					public hours(): org.joda.time.DurationField;
					public millis(): org.joda.time.DurationField;
					public hourOfDay(): org.joda.time.DateTimeField;
					public halfdays(): org.joda.time.DurationField;
					public minuteOfHour(): org.joda.time.DateTimeField;
					public weekyears(): org.joda.time.DurationField;
					public halfdayOfDay(): org.joda.time.DateTimeField;
					public dayOfMonth(): org.joda.time.DateTimeField;
					public getZone(): org.joda.time.DateTimeZone;
					public clockhourOfHalfday(): org.joda.time.DateTimeField;
					public validate(param0: org.joda.time.ReadablePartial, param1: number[]): void;
					public dayOfWeek(): org.joda.time.DateTimeField;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public centuryOfEra(): org.joda.time.DateTimeField;
					public secondOfMinute(): org.joda.time.DateTimeField;
					public eras(): org.joda.time.DurationField;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public get(param0: org.joda.time.ReadablePeriod, param1: number, param2: number): number[];
					public weeks(): org.joda.time.DurationField;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export abstract class BasicChronology extends org.joda.time.chrono.AssembledChronology {
					public static class: java.lang.Class<org.joda.time.chrono.BasicChronology>;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number): number;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public getMinimumDaysInFirstWeek(): number;
					public hashCode(): number;
					public getZone(): org.joda.time.DateTimeZone;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
				}
				export module BasicChronology {
					export class HalfdayField extends org.joda.time.field.PreciseDateTimeField {
						public static class: java.lang.Class<org.joda.time.chrono.BasicChronology.HalfdayField>;
						public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
						public set(param0: number, param1: string): number;
						public getAsText(param0: number, param1: java.util.Locale): string;
						public set(param0: number, param1: string, param2: java.util.Locale): number;
						public set(param0: number, param1: number): number;
						public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
						public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
						public getMaximumTextLength(param0: java.util.Locale): number;
						public getAsText(param0: number): string;
						public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					}
					export class YearInfo extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.chrono.BasicChronology.YearInfo>;
						public iYear: number;
						public iFirstDayMillis: number;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class BasicDayOfMonthDateTimeField extends org.joda.time.field.PreciseDurationDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.BasicDayOfMonthDateTimeField>;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public getMinimumValue(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public getMaximumValueForSet(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public isLeap(param0: number): boolean;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class BasicDayOfYearDateTimeField extends org.joda.time.field.PreciseDurationDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.BasicDayOfYearDateTimeField>;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public getMinimumValue(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public getMaximumValueForSet(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public isLeap(param0: number): boolean;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export abstract class BasicFixedMonthChronology extends org.joda.time.chrono.BasicChronology {
					public static class: java.lang.Class<org.joda.time.chrono.BasicFixedMonthChronology>;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export abstract class BasicGJChronology extends org.joda.time.chrono.BasicChronology {
					public static class: java.lang.Class<org.joda.time.chrono.BasicGJChronology>;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class BasicMonthOfYearDateTimeField extends org.joda.time.field.ImpreciseDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.BasicMonthOfYearDateTimeField>;
					public addWrapField(param0: number, param1: number): number;
					public getMinimumValue(param0: number): number;
					public isLenient(): boolean;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public roundFloor(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public getLeapDurationField(): org.joda.time.DurationField;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public remainder(param0: number): number;
					public getLeapAmount(param0: number): number;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public add(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public isLeap(param0: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class BasicSingleEraDateTimeField extends org.joda.time.field.BaseDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.BasicSingleEraDateTimeField>;
					public getMinimumValue(param0: number): number;
					public isLenient(): boolean;
					public roundHalfEven(param0: number): number;
					public roundHalfFloor(param0: number): number;
					public roundHalfCeiling(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public roundCeiling(param0: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public getAsText(param0: number): string;
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public roundFloor(param0: number): number;
					public getMaximumTextLength(param0: java.util.Locale): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getDurationField(): org.joda.time.DurationField;
					public getAsText(param0: number, param1: java.util.Locale): string;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public getMinimumValue(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class BasicWeekOfWeekyearDateTimeField extends org.joda.time.field.PreciseDurationDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.BasicWeekOfWeekyearDateTimeField>;
					public remainder(param0: number): number;
					public getMinimumValue(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public roundCeiling(param0: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public roundFloor(param0: number): number;
					public getMaximumValueForSet(param0: number, param1: number): number;
					public getMinimumValue(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class BasicWeekyearDateTimeField extends org.joda.time.field.ImpreciseDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.BasicWeekyearDateTimeField>;
					public addWrapField(param0: number, param1: number): number;
					public getMinimumValue(param0: number): number;
					public isLenient(): boolean;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public roundFloor(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public getLeapDurationField(): org.joda.time.DurationField;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public remainder(param0: number): number;
					public getLeapAmount(param0: number): number;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public add(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public isLeap(param0: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class BasicYearDateTimeField extends org.joda.time.field.ImpreciseDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.BasicYearDateTimeField>;
					public iChronology: org.joda.time.chrono.BasicChronology;
					public addWrapField(param0: number, param1: number): number;
					public getMinimumValue(param0: number): number;
					public isLenient(): boolean;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public roundCeiling(param0: number): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public roundFloor(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public getLeapDurationField(): org.joda.time.DurationField;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public remainder(param0: number): number;
					public getLeapAmount(param0: number): number;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public setExtended(param0: number, param1: number): number;
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public add(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public isLeap(param0: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class BuddhistChronology extends org.joda.time.chrono.AssembledChronology {
					public static class: java.lang.Class<org.joda.time.chrono.BuddhistChronology>;
					public static BE: number;
					public static getInstanceUTC(): org.joda.time.chrono.BuddhistChronology;
					public withUTC(): org.joda.time.Chronology;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public static getInstance(): org.joda.time.chrono.BuddhistChronology;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public static getInstance(param0: org.joda.time.DateTimeZone): org.joda.time.chrono.BuddhistChronology;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class CopticChronology extends org.joda.time.chrono.BasicFixedMonthChronology {
					public static class: java.lang.Class<org.joda.time.chrono.CopticChronology>;
					public static AM: number;
					public static getInstance(param0: org.joda.time.DateTimeZone, param1: number): org.joda.time.chrono.CopticChronology;
					public withUTC(): org.joda.time.Chronology;
					public static getInstance(param0: org.joda.time.DateTimeZone): org.joda.time.chrono.CopticChronology;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public static getInstanceUTC(): org.joda.time.chrono.CopticChronology;
					public static getInstance(): org.joda.time.chrono.CopticChronology;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class EthiopicChronology extends org.joda.time.chrono.BasicFixedMonthChronology {
					public static class: java.lang.Class<org.joda.time.chrono.EthiopicChronology>;
					public static EE: number;
					public withUTC(): org.joda.time.Chronology;
					public static getInstance(): org.joda.time.chrono.EthiopicChronology;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public static getInstance(param0: org.joda.time.DateTimeZone): org.joda.time.chrono.EthiopicChronology;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public static getInstanceUTC(): org.joda.time.chrono.EthiopicChronology;
					public static getInstance(param0: org.joda.time.DateTimeZone, param1: number): org.joda.time.chrono.EthiopicChronology;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class GJCacheKey extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.chrono.GJCacheKey>;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class GJChronology extends org.joda.time.chrono.AssembledChronology {
					public static class: java.lang.Class<org.joda.time.chrono.GJChronology>;
					public withUTC(): org.joda.time.Chronology;
					public equals(obj: any): boolean;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public static getInstance(): org.joda.time.chrono.GJChronology;
					public static getInstance(param0: org.joda.time.DateTimeZone, param1: number, param2: number): org.joda.time.chrono.GJChronology;
					public static getInstance(param0: org.joda.time.DateTimeZone, param1: org.joda.time.ReadableInstant, param2: number): org.joda.time.chrono.GJChronology;
					public getZone(): org.joda.time.DateTimeZone;
					public equals(param0: any): boolean;
					public static getInstance(param0: org.joda.time.DateTimeZone, param1: org.joda.time.ReadableInstant): org.joda.time.chrono.GJChronology;
					public toString(): string;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number): number;
					public static getInstanceUTC(): org.joda.time.chrono.GJChronology;
					public static getInstance(param0: org.joda.time.DateTimeZone): org.joda.time.chrono.GJChronology;
					public getMinimumDaysInFirstWeek(): number;
					public getGregorianCutover(): org.joda.time.Instant;
					public hashCode(): number;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
				}
				export module GJChronology {
					export class CutoverField extends org.joda.time.field.BaseDateTimeField {
						public static class: java.lang.Class<org.joda.time.chrono.GJChronology.CutoverField>;
						public iDurationField: org.joda.time.DurationField;
						public iRangeDurationField: org.joda.time.DurationField;
						public getDifference(param0: number, param1: number): number;
						public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
						public add(param0: number, param1: number): number;
						public getAsText(param0: number, param1: java.util.Locale): string;
						public isLenient(): boolean;
						public getLeapAmount(param0: number): number;
						public getMinimumValue(): number;
						public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
						public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
						public isLeap(param0: number): boolean;
						public julianToGregorian(param0: number): number;
						public roundFloor(param0: number): number;
						public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
						public roundCeiling(param0: number): number;
						public gregorianToJulian(param0: number): number;
						public getMaximumValue(): number;
						public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
						public set(param0: number, param1: string): number;
						public set(param0: number, param1: string, param2: java.util.Locale): number;
						public getRangeDurationField(): org.joda.time.DurationField;
						public getMaximumTextLength(param0: java.util.Locale): number;
						public getAsShortText(param0: number): string;
						public getAsShortText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
						public getDifferenceAsLong(param0: number, param1: number): number;
						public getAsShortText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
						public getMaximumValue(param0: number): number;
						public set(param0: number, param1: number): number;
						public getLeapDurationField(): org.joda.time.DurationField;
						public get(param0: number): number;
						public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
						public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
						public getMinimumValue(param0: number): number;
						public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
						public getDurationField(): org.joda.time.DurationField;
						public getAsText(param0: number): string;
						public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
						public getAsShortText(param0: number, param1: java.util.Locale): string;
						public getMaximumShortTextLength(param0: java.util.Locale): number;
					}
					export class ImpreciseCutoverField extends org.joda.time.chrono.GJChronology.CutoverField {
						public static class: java.lang.Class<org.joda.time.chrono.GJChronology.ImpreciseCutoverField>;
						public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
						public getDifference(param0: number, param1: number): number;
						public add(param0: number, param1: number): number;
						public getDifferenceAsLong(param0: number, param1: number): number;
						public getMaximumValue(param0: number): number;
						public getMaximumValue(): number;
						public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
						public getMinimumValue(): number;
						public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
						public getMinimumValue(param0: number): number;
						public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
						public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					}
					export class LinkedDurationField extends org.joda.time.field.DecoratedDurationField {
						public static class: java.lang.Class<org.joda.time.chrono.GJChronology.LinkedDurationField>;
						public getDifference(param0: number, param1: number): number;
						public add(param0: number, param1: number): number;
						public getDifferenceAsLong(param0: number, param1: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class GJDayOfWeekDateTimeField extends org.joda.time.field.PreciseDurationDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.GJDayOfWeekDateTimeField>;
					public getAsShortText(param0: number, param1: java.util.Locale): string;
					public getMinimumValue(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumShortTextLength(param0: java.util.Locale): number;
					public getAsText(param0: number, param1: java.util.Locale): string;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getAsShortText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public getAsShortText(param0: number): string;
					public getAsText(param0: number): string;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
					public getRangeDurationField(): org.joda.time.DurationField;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public getMaximumValue(): number;
					public getMaximumTextLength(param0: java.util.Locale): number;
					public getMinimumValue(): number;
					public convertText(param0: string, param1: java.util.Locale): number;
					public getAsShortText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class GJEraDateTimeField extends org.joda.time.field.BaseDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.GJEraDateTimeField>;
					public getMinimumValue(param0: number): number;
					public isLenient(): boolean;
					public roundHalfEven(param0: number): number;
					public roundHalfFloor(param0: number): number;
					public roundHalfCeiling(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public roundCeiling(param0: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public getAsText(param0: number): string;
					public set(param0: number, param1: string): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public roundFloor(param0: number): number;
					public getMaximumTextLength(param0: java.util.Locale): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getDurationField(): org.joda.time.DurationField;
					public getAsText(param0: number, param1: java.util.Locale): string;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public getMinimumValue(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class GJLocaleSymbols extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.chrono.GJLocaleSymbols>;
					public dayOfWeekValueToShortText(param0: number): string;
					public halfdayTextToValue(param0: string): number;
					public eraTextToValue(param0: string): number;
					public dayOfWeekValueToText(param0: number): string;
					public eraValueToText(param0: number): string;
					public getEraMaxTextLength(): number;
					public dayOfWeekTextToValue(param0: string): number;
					public halfdayValueToText(param0: number): string;
					public monthOfYearValueToShortText(param0: number): string;
					public monthOfYearTextToValue(param0: string): number;
					public getDayOfWeekMaxTextLength(): number;
					public getHalfdayMaxTextLength(): number;
					public getMonthMaxShortTextLength(): number;
					public monthOfYearValueToText(param0: number): string;
					public getMonthMaxTextLength(): number;
					public getDayOfWeekMaxShortTextLength(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class GJMonthOfYearDateTimeField extends org.joda.time.chrono.BasicMonthOfYearDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.GJMonthOfYearDateTimeField>;
					public getAsShortText(param0: number, param1: java.util.Locale): string;
					public getAsShortText(param0: number): string;
					public getAsText(param0: number): string;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
					public getMaximumShortTextLength(param0: java.util.Locale): number;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public getAsText(param0: number, param1: java.util.Locale): string;
					public getMaximumTextLength(param0: java.util.Locale): number;
					public getAsShortText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public convertText(param0: string, param1: java.util.Locale): number;
					public getAsShortText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class GJYearOfEraDateTimeField extends org.joda.time.field.DecoratedDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.GJYearOfEraDateTimeField>;
					public addWrapField(param0: number, param1: number): number;
					public getMinimumValue(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public remainder(param0: number): number;
					public getDifference(param0: number, param1: number): number;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public roundCeiling(param0: number): number;
					public get(param0: number): number;
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public add(param0: number, param1: number): number;
					public getMaximumValue(): number;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public roundFloor(param0: number): number;
					public getMinimumValue(): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class GregorianChronology extends org.joda.time.chrono.BasicGJChronology {
					public static class: java.lang.Class<org.joda.time.chrono.GregorianChronology>;
					public static getInstance(param0: org.joda.time.DateTimeZone): org.joda.time.chrono.GregorianChronology;
					public withUTC(): org.joda.time.Chronology;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public static getInstance(): org.joda.time.chrono.GregorianChronology;
					public static getInstanceUTC(): org.joda.time.chrono.GregorianChronology;
					public static getInstance(param0: org.joda.time.DateTimeZone, param1: number): org.joda.time.chrono.GregorianChronology;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class ISOChronology extends org.joda.time.chrono.AssembledChronology {
					public static class: java.lang.Class<org.joda.time.chrono.ISOChronology>;
					public withUTC(): org.joda.time.Chronology;
					public equals(param0: any): boolean;
					public toString(): string;
					public equals(obj: any): boolean;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public static getInstance(): org.joda.time.chrono.ISOChronology;
					public hashCode(): number;
					public static getInstance(param0: org.joda.time.DateTimeZone): org.joda.time.chrono.ISOChronology;
					public static getInstanceUTC(): org.joda.time.chrono.ISOChronology;
				}
				export module ISOChronology {
					export class Stub extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.joda.time.chrono.ISOChronology.Stub>;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class ISOYearOfEraDateTimeField extends org.joda.time.field.DecoratedDateTimeField {
					public static class: java.lang.Class<org.joda.time.chrono.ISOYearOfEraDateTimeField>;
					public addWrapField(param0: number, param1: number): number;
					public getMinimumValue(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public remainder(param0: number): number;
					public getDifference(param0: number, param1: number): number;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public roundCeiling(param0: number): number;
					public get(param0: number): number;
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public add(param0: number, param1: number): number;
					public getMaximumValue(): number;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public roundFloor(param0: number): number;
					public getMinimumValue(): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class IslamicChronology extends org.joda.time.chrono.BasicChronology {
					public static class: java.lang.Class<org.joda.time.chrono.IslamicChronology>;
					public static AH: number;
					public static LEAP_YEAR_15_BASED: org.joda.time.chrono.IslamicChronology.LeapYearPatternType;
					public static LEAP_YEAR_16_BASED: org.joda.time.chrono.IslamicChronology.LeapYearPatternType;
					public static LEAP_YEAR_INDIAN: org.joda.time.chrono.IslamicChronology.LeapYearPatternType;
					public static LEAP_YEAR_HABASH_AL_HASIB: org.joda.time.chrono.IslamicChronology.LeapYearPatternType;
					public withUTC(): org.joda.time.Chronology;
					public equals(param0: any): boolean;
					public static getInstanceUTC(): org.joda.time.chrono.IslamicChronology;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public getLeapYearPatternType(): org.joda.time.chrono.IslamicChronology.LeapYearPatternType;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public static getInstance(param0: org.joda.time.DateTimeZone, param1: org.joda.time.chrono.IslamicChronology.LeapYearPatternType): org.joda.time.chrono.IslamicChronology;
					public static getInstance(param0: org.joda.time.DateTimeZone): org.joda.time.chrono.IslamicChronology;
					public hashCode(): number;
					public static getInstance(): org.joda.time.chrono.IslamicChronology;
				}
				export module IslamicChronology {
					export class LeapYearPatternType extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.joda.time.chrono.IslamicChronology.LeapYearPatternType>;
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class JulianChronology extends org.joda.time.chrono.BasicGJChronology {
					public static class: java.lang.Class<org.joda.time.chrono.JulianChronology>;
					public static getInstance(param0: org.joda.time.DateTimeZone, param1: number): org.joda.time.chrono.JulianChronology;
					public withUTC(): org.joda.time.Chronology;
					public static getInstance(param0: org.joda.time.DateTimeZone): org.joda.time.chrono.JulianChronology;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public static getInstance(): org.joda.time.chrono.JulianChronology;
					public static getInstanceUTC(): org.joda.time.chrono.JulianChronology;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class LenientChronology extends org.joda.time.chrono.AssembledChronology {
					public static class: java.lang.Class<org.joda.time.chrono.LenientChronology>;
					public withUTC(): org.joda.time.Chronology;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public static getInstance(param0: org.joda.time.Chronology): org.joda.time.chrono.LenientChronology;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class LimitChronology extends org.joda.time.chrono.AssembledChronology {
					public static class: java.lang.Class<org.joda.time.chrono.LimitChronology>;
					public withUTC(): org.joda.time.Chronology;
					public getLowerLimit(): org.joda.time.DateTime;
					public equals(obj: any): boolean;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public getUpperLimit(): org.joda.time.DateTime;
					public equals(param0: any): boolean;
					public toString(): string;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number): number;
					public static getInstance(param0: org.joda.time.Chronology, param1: org.joda.time.ReadableDateTime, param2: org.joda.time.ReadableDateTime): org.joda.time.chrono.LimitChronology;
					public hashCode(): number;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
				}
				export module LimitChronology {
					export class LimitDateTimeField extends org.joda.time.field.DecoratedDateTimeField {
						public static class: java.lang.Class<org.joda.time.chrono.LimitChronology.LimitDateTimeField>;
						public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
						public getDifference(param0: number, param1: number): number;
						public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
						public add(param0: number, param1: number): number;
						public getAsText(param0: number, param1: java.util.Locale): string;
						public getLeapAmount(param0: number): number;
						public getMinimumValue(): number;
						public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
						public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
						public isLeap(param0: number): boolean;
						public roundFloor(param0: number): number;
						public roundCeiling(param0: number): number;
						public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
						public getMaximumValue(): number;
						public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
						public set(param0: number, param1: string): number;
						public set(param0: number, param1: string, param2: java.util.Locale): number;
						public roundHalfEven(param0: number): number;
						public getRangeDurationField(): org.joda.time.DurationField;
						public getMaximumTextLength(param0: java.util.Locale): number;
						public getAsShortText(param0: number): string;
						public addWrapField(param0: number, param1: number): number;
						public getAsShortText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
						public roundHalfFloor(param0: number): number;
						public getDifferenceAsLong(param0: number, param1: number): number;
						public getAsShortText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
						public getMaximumValue(param0: number): number;
						public set(param0: number, param1: number): number;
						public getLeapDurationField(): org.joda.time.DurationField;
						public get(param0: number): number;
						public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
						public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
						public getMinimumValue(param0: number): number;
						public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
						public getDurationField(): org.joda.time.DurationField;
						public roundHalfCeiling(param0: number): number;
						public getAsText(param0: number): string;
						public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
						public getAsShortText(param0: number, param1: java.util.Locale): string;
						public remainder(param0: number): number;
						public getMaximumShortTextLength(param0: java.util.Locale): number;
					}
					export class LimitDurationField extends org.joda.time.field.DecoratedDurationField {
						public static class: java.lang.Class<org.joda.time.chrono.LimitChronology.LimitDurationField>;
						public getValue(param0: number): number;
						public getDifference(param0: number, param1: number): number;
						public getMillis(param0: number): number;
						public add(param0: number, param1: number): number;
						public getDifferenceAsLong(param0: number, param1: number): number;
						public getValueAsLong(param0: number): number;
						public getValue(param0: number, param1: number): number;
						public getMillis(param0: number, param1: number): number;
						public getValueAsLong(param0: number, param1: number): number;
					}
					export class LimitException extends java.lang.IllegalArgumentException {
						public static class: java.lang.Class<org.joda.time.chrono.LimitChronology.LimitException>;
						public getMessage(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class StrictChronology extends org.joda.time.chrono.AssembledChronology {
					public static class: java.lang.Class<org.joda.time.chrono.StrictChronology>;
					public withUTC(): org.joda.time.Chronology;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public hashCode(): number;
					public static getInstance(param0: org.joda.time.Chronology): org.joda.time.chrono.StrictChronology;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module chrono {
				export class ZonedChronology extends org.joda.time.chrono.AssembledChronology {
					public static class: java.lang.Class<org.joda.time.chrono.ZonedChronology>;
					public withUTC(): org.joda.time.Chronology;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public assemble(param0: org.joda.time.chrono.AssembledChronology.Fields): void;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number): number;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public static getInstance(param0: org.joda.time.Chronology, param1: org.joda.time.DateTimeZone): org.joda.time.chrono.ZonedChronology;
					public hashCode(): number;
					public getZone(): org.joda.time.DateTimeZone;
					public getDateTimeMillis(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
				}
				export module ZonedChronology {
					export class ZonedDateTimeField extends org.joda.time.field.BaseDateTimeField {
						public static class: java.lang.Class<org.joda.time.chrono.ZonedChronology.ZonedDateTimeField>;
						public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
						public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
						public getDifference(param0: number, param1: number): number;
						public add(param0: number, param1: number): number;
						public equals(obj: any): boolean;
						public getAsText(param0: number, param1: java.util.Locale): string;
						public isLenient(): boolean;
						public getLeapAmount(param0: number): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getMinimumValue(): number;
						public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
						public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
						public isLeap(param0: number): boolean;
						public roundFloor(param0: number): number;
						public roundCeiling(param0: number): number;
						public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
						public getMaximumValue(): number;
						public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
						public set(param0: number, param1: string): number;
						public set(param0: number, param1: string, param2: java.util.Locale): number;
						public getRangeDurationField(): org.joda.time.DurationField;
						public getMaximumTextLength(param0: java.util.Locale): number;
						public getAsShortText(param0: number): string;
						public addWrapField(param0: number, param1: number): number;
						public getAsShortText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
						public getDifferenceAsLong(param0: number, param1: number): number;
						public getAsShortText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
						public getMaximumValue(param0: number): number;
						public set(param0: number, param1: number): number;
						public getLeapDurationField(): org.joda.time.DurationField;
						public get(param0: number): number;
						public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
						public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
						public getMinimumValue(param0: number): number;
						public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
						public getDurationField(): org.joda.time.DurationField;
						public getAsText(param0: number): string;
						public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
						public getAsShortText(param0: number, param1: java.util.Locale): string;
						public remainder(param0: number): number;
						public getMaximumShortTextLength(param0: java.util.Locale): number;
					}
					export class ZonedDurationField extends org.joda.time.field.BaseDurationField {
						public static class: java.lang.Class<org.joda.time.chrono.ZonedChronology.ZonedDurationField>;
						public getDifference(param0: number, param1: number): number;
						public getMillis(param0: number): number;
						public add(param0: number, param1: number): number;
						public equals(obj: any): boolean;
						public getValueAsLong(param0: number): number;
						public getValue(param0: number, param1: number): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getValueAsLong(param0: number, param1: number): number;
						public isPrecise(): boolean;
						public getValue(param0: number): number;
						public getDifferenceAsLong(param0: number, param1: number): number;
						public getUnitMillis(): number;
						public getMillis(param0: number, param1: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export abstract class AbstractConverter extends java.lang.Object implements org.joda.time.convert.Converter {
					public static class: java.lang.Class<org.joda.time.convert.AbstractConverter>;
					public getInstantMillis(param0: any, param1: org.joda.time.Chronology): number;
					public toString(): string;
					public getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public constructor();
					public isReadableInterval(param0: any, param1: org.joda.time.Chronology): boolean;
					public getSupportedType(): java.lang.Class<any>;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology): number[];
					public getPeriodType(param0: any): org.joda.time.PeriodType;
					public getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology, param3: org.joda.time.format.DateTimeFormatter): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class CalendarConverter extends org.joda.time.convert.AbstractConverter implements org.joda.time.convert.InstantConverter, org.joda.time.convert.PartialConverter {
					public static class: java.lang.Class<org.joda.time.convert.CalendarConverter>;
					public getInstantMillis(param0: any, param1: org.joda.time.Chronology): number;
					public getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public constructor();
					public getSupportedType(): java.lang.Class<any>;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology): number[];
					public getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology, param3: org.joda.time.format.DateTimeFormatter): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class Converter extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.convert.Converter>;
					/**
					 * Constructs a new instance of the org.joda.time.convert.Converter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSupportedType(): java.lang.Class<any>;
					});
					public constructor();
					public getSupportedType(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class ConverterManager extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.convert.ConverterManager>;
					public getDurationConverter(param0: any): org.joda.time.convert.DurationConverter;
					public getDurationConverters(): org.joda.time.convert.DurationConverter[];
					public getInstantConverter(param0: any): org.joda.time.convert.InstantConverter;
					public addPeriodConverter(param0: org.joda.time.convert.PeriodConverter): org.joda.time.convert.PeriodConverter;
					public removePeriodConverter(param0: org.joda.time.convert.PeriodConverter): org.joda.time.convert.PeriodConverter;
					public getPartialConverter(param0: any): org.joda.time.convert.PartialConverter;
					public removeIntervalConverter(param0: org.joda.time.convert.IntervalConverter): org.joda.time.convert.IntervalConverter;
					public getInstantConverters(): org.joda.time.convert.InstantConverter[];
					public getPartialConverters(): org.joda.time.convert.PartialConverter[];
					public getPeriodConverters(): org.joda.time.convert.PeriodConverter[];
					public addIntervalConverter(param0: org.joda.time.convert.IntervalConverter): org.joda.time.convert.IntervalConverter;
					public addDurationConverter(param0: org.joda.time.convert.DurationConverter): org.joda.time.convert.DurationConverter;
					public getIntervalConverter(param0: any): org.joda.time.convert.IntervalConverter;
					public addPartialConverter(param0: org.joda.time.convert.PartialConverter): org.joda.time.convert.PartialConverter;
					public toString(): string;
					public constructor();
					public static getInstance(): org.joda.time.convert.ConverterManager;
					public addInstantConverter(param0: org.joda.time.convert.InstantConverter): org.joda.time.convert.InstantConverter;
					public removeDurationConverter(param0: org.joda.time.convert.DurationConverter): org.joda.time.convert.DurationConverter;
					public getPeriodConverter(param0: any): org.joda.time.convert.PeriodConverter;
					public removeInstantConverter(param0: org.joda.time.convert.InstantConverter): org.joda.time.convert.InstantConverter;
					public getIntervalConverters(): org.joda.time.convert.IntervalConverter[];
					public removePartialConverter(param0: org.joda.time.convert.PartialConverter): org.joda.time.convert.PartialConverter;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class ConverterSet extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.convert.ConverterSet>;
				}
				export module ConverterSet {
					export class Entry extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.convert.ConverterSet.Entry>;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class DateConverter extends org.joda.time.convert.AbstractConverter implements org.joda.time.convert.InstantConverter, org.joda.time.convert.PartialConverter {
					public static class: java.lang.Class<org.joda.time.convert.DateConverter>;
					public getInstantMillis(param0: any, param1: org.joda.time.Chronology): number;
					public getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public constructor();
					public getSupportedType(): java.lang.Class<any>;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology): number[];
					public getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology, param3: org.joda.time.format.DateTimeFormatter): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class DurationConverter extends java.lang.Object implements org.joda.time.convert.Converter {
					public static class: java.lang.Class<org.joda.time.convert.DurationConverter>;
					/**
					 * Constructs a new instance of the org.joda.time.convert.DurationConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDurationMillis(param0: any): number;
						getSupportedType(): java.lang.Class<any>;
					});
					public constructor();
					public getSupportedType(): java.lang.Class<any>;
					public getDurationMillis(param0: any): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class InstantConverter extends java.lang.Object implements org.joda.time.convert.Converter {
					public static class: java.lang.Class<org.joda.time.convert.InstantConverter>;
					/**
					 * Constructs a new instance of the org.joda.time.convert.InstantConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
						getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
						getInstantMillis(param0: any, param1: org.joda.time.Chronology): number;
						getSupportedType(): java.lang.Class<any>;
					});
					public constructor();
					public getInstantMillis(param0: any, param1: org.joda.time.Chronology): number;
					public getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public getSupportedType(): java.lang.Class<any>;
					public getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class IntervalConverter extends java.lang.Object implements org.joda.time.convert.Converter {
					public static class: java.lang.Class<org.joda.time.convert.IntervalConverter>;
					/**
					 * Constructs a new instance of the org.joda.time.convert.IntervalConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isReadableInterval(param0: any, param1: org.joda.time.Chronology): boolean;
						setInto(param0: org.joda.time.ReadWritableInterval, param1: any, param2: org.joda.time.Chronology): void;
						getSupportedType(): java.lang.Class<any>;
					});
					public constructor();
					public isReadableInterval(param0: any, param1: org.joda.time.Chronology): boolean;
					public setInto(param0: org.joda.time.ReadWritableInterval, param1: any, param2: org.joda.time.Chronology): void;
					public getSupportedType(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class LongConverter extends org.joda.time.convert.AbstractConverter implements org.joda.time.convert.InstantConverter, org.joda.time.convert.PartialConverter, org.joda.time.convert.DurationConverter {
					public static class: java.lang.Class<org.joda.time.convert.LongConverter>;
					public getInstantMillis(param0: any, param1: org.joda.time.Chronology): number;
					public getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public constructor();
					public getSupportedType(): java.lang.Class<any>;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology): number[];
					public getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology, param3: org.joda.time.format.DateTimeFormatter): number[];
					public getDurationMillis(param0: any): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class NullConverter extends org.joda.time.convert.AbstractConverter implements org.joda.time.convert.InstantConverter, org.joda.time.convert.PartialConverter, org.joda.time.convert.DurationConverter, org.joda.time.convert.PeriodConverter, org.joda.time.convert.IntervalConverter {
					public static class: java.lang.Class<org.joda.time.convert.NullConverter>;
					public getInstantMillis(param0: any, param1: org.joda.time.Chronology): number;
					public getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public constructor();
					public setInto(param0: org.joda.time.ReadWritableInterval, param1: any, param2: org.joda.time.Chronology): void;
					public isReadableInterval(param0: any, param1: org.joda.time.Chronology): boolean;
					public getSupportedType(): java.lang.Class<any>;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology): number[];
					public getPeriodType(param0: any): org.joda.time.PeriodType;
					public setInto(param0: org.joda.time.ReadWritablePeriod, param1: any, param2: org.joda.time.Chronology): void;
					public getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology, param3: org.joda.time.format.DateTimeFormatter): number[];
					public getDurationMillis(param0: any): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class PartialConverter extends java.lang.Object implements org.joda.time.convert.Converter {
					public static class: java.lang.Class<org.joda.time.convert.PartialConverter>;
					/**
					 * Constructs a new instance of the org.joda.time.convert.PartialConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
						getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
						getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology): number[];
						getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology, param3: org.joda.time.format.DateTimeFormatter): number[];
						getSupportedType(): java.lang.Class<any>;
					});
					public constructor();
					public getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public getSupportedType(): java.lang.Class<any>;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology): number[];
					public getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology, param3: org.joda.time.format.DateTimeFormatter): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class PeriodConverter extends java.lang.Object implements org.joda.time.convert.Converter {
					public static class: java.lang.Class<org.joda.time.convert.PeriodConverter>;
					/**
					 * Constructs a new instance of the org.joda.time.convert.PeriodConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setInto(param0: org.joda.time.ReadWritablePeriod, param1: any, param2: org.joda.time.Chronology): void;
						getPeriodType(param0: any): org.joda.time.PeriodType;
						getSupportedType(): java.lang.Class<any>;
					});
					public constructor();
					public getSupportedType(): java.lang.Class<any>;
					public getPeriodType(param0: any): org.joda.time.PeriodType;
					public setInto(param0: org.joda.time.ReadWritablePeriod, param1: any, param2: org.joda.time.Chronology): void;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class ReadableDurationConverter extends org.joda.time.convert.AbstractConverter implements org.joda.time.convert.DurationConverter, org.joda.time.convert.PeriodConverter {
					public static class: java.lang.Class<org.joda.time.convert.ReadableDurationConverter>;
					public constructor();
					public getSupportedType(): java.lang.Class<any>;
					public getPeriodType(param0: any): org.joda.time.PeriodType;
					public setInto(param0: org.joda.time.ReadWritablePeriod, param1: any, param2: org.joda.time.Chronology): void;
					public getDurationMillis(param0: any): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class ReadableInstantConverter extends org.joda.time.convert.AbstractConverter implements org.joda.time.convert.InstantConverter, org.joda.time.convert.PartialConverter {
					public static class: java.lang.Class<org.joda.time.convert.ReadableInstantConverter>;
					public getInstantMillis(param0: any, param1: org.joda.time.Chronology): number;
					public getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public constructor();
					public getSupportedType(): java.lang.Class<any>;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology): number[];
					public getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology, param3: org.joda.time.format.DateTimeFormatter): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class ReadableIntervalConverter extends org.joda.time.convert.AbstractConverter implements org.joda.time.convert.IntervalConverter, org.joda.time.convert.DurationConverter, org.joda.time.convert.PeriodConverter {
					public static class: java.lang.Class<org.joda.time.convert.ReadableIntervalConverter>;
					public constructor();
					public isReadableInterval(param0: any, param1: org.joda.time.Chronology): boolean;
					public setInto(param0: org.joda.time.ReadWritableInterval, param1: any, param2: org.joda.time.Chronology): void;
					public getSupportedType(): java.lang.Class<any>;
					public getPeriodType(param0: any): org.joda.time.PeriodType;
					public setInto(param0: org.joda.time.ReadWritablePeriod, param1: any, param2: org.joda.time.Chronology): void;
					public getDurationMillis(param0: any): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class ReadablePartialConverter extends org.joda.time.convert.AbstractConverter implements org.joda.time.convert.PartialConverter {
					public static class: java.lang.Class<org.joda.time.convert.ReadablePartialConverter>;
					public getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public constructor();
					public getSupportedType(): java.lang.Class<any>;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology): number[];
					public getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology, param3: org.joda.time.format.DateTimeFormatter): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class ReadablePeriodConverter extends org.joda.time.convert.AbstractConverter implements org.joda.time.convert.PeriodConverter {
					public static class: java.lang.Class<org.joda.time.convert.ReadablePeriodConverter>;
					public constructor();
					public getSupportedType(): java.lang.Class<any>;
					public getPeriodType(param0: any): org.joda.time.PeriodType;
					public setInto(param0: org.joda.time.ReadWritablePeriod, param1: any, param2: org.joda.time.Chronology): void;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module convert {
				export class StringConverter extends org.joda.time.convert.AbstractConverter implements org.joda.time.convert.InstantConverter, org.joda.time.convert.PartialConverter, org.joda.time.convert.DurationConverter, org.joda.time.convert.PeriodConverter, org.joda.time.convert.IntervalConverter {
					public static class: java.lang.Class<org.joda.time.convert.StringConverter>;
					public getInstantMillis(param0: any, param1: org.joda.time.Chronology): number;
					public getChronology(param0: any, param1: org.joda.time.DateTimeZone): org.joda.time.Chronology;
					public constructor();
					public setInto(param0: org.joda.time.ReadWritableInterval, param1: any, param2: org.joda.time.Chronology): void;
					public isReadableInterval(param0: any, param1: org.joda.time.Chronology): boolean;
					public getSupportedType(): java.lang.Class<any>;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology): number[];
					public getPeriodType(param0: any): org.joda.time.PeriodType;
					public setInto(param0: org.joda.time.ReadWritablePeriod, param1: any, param2: org.joda.time.Chronology): void;
					public getChronology(param0: any, param1: org.joda.time.Chronology): org.joda.time.Chronology;
					public getPartialValues(param0: org.joda.time.ReadablePartial, param1: any, param2: org.joda.time.Chronology, param3: org.joda.time.format.DateTimeFormatter): number[];
					public getDurationMillis(param0: any): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export abstract class AbstractPartialFieldProperty extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.field.AbstractPartialFieldProperty>;
					public getMinimumValueOverall(): number;
					public equals(obj: any): boolean;
					public getMaximumValueOverall(): number;
					public getReadablePartial(): org.joda.time.ReadablePartial;
					public compareTo(param0: org.joda.time.ReadablePartial): number;
					public getField(): org.joda.time.DateTimeField;
					public toString(): string;
					public constructor();
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public getMaximumTextLength(param0: java.util.Locale): number;
					public hashCode(): number;
					public getAsShortText(param0: java.util.Locale): string;
					public getAsString(): string;
					public getMaximumShortTextLength(param0: java.util.Locale): number;
					public getDurationField(): org.joda.time.DurationField;
					public getFieldType(): org.joda.time.DateTimeFieldType;
					public getAsText(): string;
					public getAsShortText(): string;
					public equals(param0: any): boolean;
					public getName(): string;
					public get(): number;
					public getMinimumValue(): number;
					public compareTo(param0: org.joda.time.ReadableInstant): number;
					public getAsText(param0: java.util.Locale): string;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export abstract class AbstractReadableInstantFieldProperty extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.field.AbstractReadableInstantFieldProperty>;
					public getMinimumValueOverall(): number;
					public isLeap(): boolean;
					public equals(obj: any): boolean;
					public getMaximumValueOverall(): number;
					public remainder(): number;
					public compareTo(param0: org.joda.time.ReadablePartial): number;
					public getField(): org.joda.time.DateTimeField;
					public toString(): string;
					public constructor();
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public getMillis(): number;
					public getMaximumTextLength(param0: java.util.Locale): number;
					public getLeapAmount(): number;
					public hashCode(): number;
					public getChronology(): org.joda.time.Chronology;
					public getLeapDurationField(): org.joda.time.DurationField;
					public getAsShortText(param0: java.util.Locale): string;
					public getAsString(): string;
					public getMaximumShortTextLength(param0: java.util.Locale): number;
					public getDurationField(): org.joda.time.DurationField;
					public toInterval(): org.joda.time.Interval;
					public getFieldType(): org.joda.time.DateTimeFieldType;
					public getAsText(): string;
					public getAsShortText(): string;
					public getDifference(param0: org.joda.time.ReadableInstant): number;
					public equals(param0: any): boolean;
					public getDifferenceAsLong(param0: org.joda.time.ReadableInstant): number;
					public getName(): string;
					public get(): number;
					public getMinimumValue(): number;
					public compareTo(param0: org.joda.time.ReadableInstant): number;
					public getAsText(param0: java.util.Locale): string;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export abstract class BaseDateTimeField extends org.joda.time.DateTimeField {
					public static class: java.lang.Class<org.joda.time.field.BaseDateTimeField>;
					public addWrapField(param0: number, param1: number): number;
					public getDifference(param0: number, param1: number): number;
					public roundHalfFloor(param0: number): number;
					public getAsShortText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public roundHalfCeiling(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public getAsText(param0: number): string;
					public set(param0: number, param1: string): number;
					public constructor();
					public getRangeDurationField(): org.joda.time.DurationField;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public getMaximumTextLength(param0: java.util.Locale): number;
					public getAsShortText(param0: number, param1: java.util.Locale): string;
					public remainder(param0: number): number;
					public getMaximumShortTextLength(param0: java.util.Locale): number;
					public getDurationField(): org.joda.time.DurationField;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public addWrapPartial(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public add(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public constructor(param0: org.joda.time.DateTimeFieldType);
					public isSupported(): boolean;
					public getMinimumValue(param0: number): number;
					public roundHalfEven(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public roundCeiling(param0: number): number;
					public get(param0: number): number;
					public getAsShortText(param0: number): string;
					public toString(): string;
					public getMaximumValue(): number;
					public roundFloor(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public getLeapDurationField(): org.joda.time.DurationField;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getAsText(param0: number, param1: java.util.Locale): string;
					public getLeapAmount(param0: number): number;
					public getMaximumValue(param0: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
					public getName(): string;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public convertText(param0: string, param1: java.util.Locale): number;
					public isLeap(param0: number): boolean;
					public getType(): org.joda.time.DateTimeFieldType;
					public getAsShortText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export abstract class BaseDurationField extends org.joda.time.DurationField implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.field.BaseDurationField>;
					public isSupported(): boolean;
					public getMillis(param0: number): number;
					public getValueAsLong(param0: number, param1: number): number;
					public getDifference(param0: number, param1: number): number;
					public getType(): org.joda.time.DurationFieldType;
					public getMillis(param0: number, param1: number): number;
					public compareTo(param0: org.joda.time.DurationField): number;
					public toString(): string;
					public getValue(param0: number): number;
					public getValue(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DurationFieldType);
					public constructor();
					public getName(): string;
					public getValueAsLong(param0: number): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export abstract class DecoratedDateTimeField extends org.joda.time.field.BaseDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.DecoratedDateTimeField>;
					public getMinimumValue(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public isLenient(): boolean;
					public getDurationField(): org.joda.time.DurationField;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getWrappedField(): org.joda.time.DateTimeField;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType);
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public constructor();
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public roundFloor(param0: number): number;
					public getMinimumValue(): number;
					public constructor(param0: org.joda.time.DateTimeFieldType);
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class DecoratedDurationField extends org.joda.time.field.BaseDurationField {
					public static class: java.lang.Class<org.joda.time.field.DecoratedDurationField>;
					public isPrecise(): boolean;
					public getMillis(param0: number): number;
					public getValueAsLong(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DurationFieldType);
					public constructor();
					public add(param0: number, param1: number): number;
					public getWrappedField(): org.joda.time.DurationField;
					public getValueAsLong(param0: number): number;
					public getMillis(param0: number, param1: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public getUnitMillis(): number;
					public constructor(param0: org.joda.time.DurationField, param1: org.joda.time.DurationFieldType);
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class DelegatedDateTimeField extends org.joda.time.DateTimeField implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.field.DelegatedDateTimeField>;
					public addWrapField(param0: number, param1: number): number;
					public isLenient(): boolean;
					public getDifference(param0: number, param1: number): number;
					public roundHalfFloor(param0: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DurationField, param2: org.joda.time.DateTimeFieldType);
					public getWrappedField(): org.joda.time.DateTimeField;
					public getAsShortText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public roundHalfCeiling(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public getAsText(param0: number): string;
					public set(param0: number, param1: string): number;
					public constructor();
					public getRangeDurationField(): org.joda.time.DurationField;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public getMaximumTextLength(param0: java.util.Locale): number;
					public getAsShortText(param0: number, param1: java.util.Locale): string;
					public remainder(param0: number): number;
					public getMaximumShortTextLength(param0: java.util.Locale): number;
					public getDurationField(): org.joda.time.DurationField;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public addWrapPartial(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public add(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public isSupported(): boolean;
					public getMinimumValue(param0: number): number;
					public roundHalfEven(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public roundCeiling(param0: number): number;
					public get(param0: number): number;
					public getAsShortText(param0: number): string;
					public toString(): string;
					public getMaximumValue(): number;
					public roundFloor(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public constructor(param0: org.joda.time.DateTimeField);
					public getLeapDurationField(): org.joda.time.DurationField;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getAsText(param0: number, param1: java.util.Locale): string;
					public getLeapAmount(param0: number): number;
					public getMaximumValue(param0: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType);
					public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
					public getName(): string;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public isLeap(param0: number): boolean;
					public getType(): org.joda.time.DateTimeFieldType;
					public getAsShortText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class DelegatedDurationField extends org.joda.time.DurationField implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.field.DelegatedDurationField>;
					public isSupported(): boolean;
					public isPrecise(): boolean;
					public getMillis(param0: number): number;
					public getValueAsLong(param0: number, param1: number): number;
					public equals(obj: any): boolean;
					public getDifference(param0: number, param1: number): number;
					public getType(): org.joda.time.DurationFieldType;
					public getMillis(param0: number, param1: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public getUnitMillis(): number;
					public equals(param0: any): boolean;
					public compareTo(param0: org.joda.time.DurationField): number;
					public toString(): string;
					public constructor(param0: org.joda.time.DurationField);
					public getValue(param0: number): number;
					public getValue(param0: number, param1: number): number;
					public constructor();
					public getName(): string;
					public add(param0: number, param1: number): number;
					public getWrappedField(): org.joda.time.DurationField;
					public getValueAsLong(param0: number): number;
					public hashCode(): number;
					public constructor(param0: org.joda.time.DurationField, param1: org.joda.time.DurationFieldType);
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class DividedDateTimeField extends org.joda.time.field.DecoratedDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.DividedDateTimeField>;
					public addWrapField(param0: number, param1: number): number;
					public getMinimumValue(param0: number): number;
					public getDifference(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType, param2: number);
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public constructor();
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public constructor(param0: org.joda.time.field.RemainderDateTimeField, param1: org.joda.time.DateTimeFieldType);
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public roundFloor(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public constructor(param0: org.joda.time.field.RemainderDateTimeField, param1: org.joda.time.DurationField, param2: org.joda.time.DateTimeFieldType);
					public getDivisor(): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public remainder(param0: number): number;
					public getDurationField(): org.joda.time.DurationField;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType);
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public add(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public constructor(param0: org.joda.time.DateTimeFieldType);
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DurationField, param2: org.joda.time.DateTimeFieldType, param3: number);
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class FieldUtils extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.field.FieldUtils>;
					public equals(obj: any): boolean;
					public static safeAdd(param0: number, param1: number): number;
					public static safeDivide(param0: number, param1: number, param2: java.math.RoundingMode): number;
					public static getWrappedValue(param0: number, param1: number, param2: number, param3: number): number;
					public static verifyValueBounds(param0: org.joda.time.DateTimeFieldType, param1: number, param2: number, param3: number): void;
					public static getWrappedValue(param0: number, param1: number, param2: number): number;
					public static safeNegate(param0: number): number;
					public static safeToInt(param0: number): number;
					public static safeSubtract(param0: number, param1: number): number;
					public static safeMultiplyToInt(param0: number, param1: number): number;
					public static verifyValueBounds(param0: string, param1: number, param2: number, param3: number): void;
					public static verifyValueBounds(param0: org.joda.time.DateTimeField, param1: number, param2: number, param3: number): void;
					public static equals(param0: any, param1: any): boolean;
					public static safeMultiply(param0: number, param1: number): number;
					public static safeDivide(param0: number, param1: number): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export abstract class ImpreciseDateTimeField extends org.joda.time.field.BaseDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.ImpreciseDateTimeField>;
					public getDifference(param0: number, param1: number): number;
					public getDurationField(): org.joda.time.DurationField;
					public set(param0: number, param1: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public constructor();
					public add(param0: number, param1: number): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public roundFloor(param0: number): number;
					public constructor(param0: org.joda.time.DateTimeFieldType);
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public constructor(param0: org.joda.time.DateTimeFieldType, param1: number);
					public getDurationUnitMillis(): number;
				}
				export module ImpreciseDateTimeField {
					export class LinkedDurationField extends org.joda.time.field.BaseDurationField {
						public static class: java.lang.Class<org.joda.time.field.ImpreciseDateTimeField.LinkedDurationField>;
						public getValue(param0: number): number;
						public getDifference(param0: number, param1: number): number;
						public getMillis(param0: number): number;
						public add(param0: number, param1: number): number;
						public getDifferenceAsLong(param0: number, param1: number): number;
						public getValueAsLong(param0: number): number;
						public getUnitMillis(): number;
						public getValue(param0: number, param1: number): number;
						public getMillis(param0: number, param1: number): number;
						public getValueAsLong(param0: number, param1: number): number;
						public isPrecise(): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class LenientDateTimeField extends org.joda.time.field.DelegatedDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.LenientDateTimeField>;
					public isLenient(): boolean;
					public set(param0: number, param1: string): number;
					public static getInstance(param0: org.joda.time.DateTimeField, param1: org.joda.time.Chronology): org.joda.time.DateTimeField;
					public constructor();
					public set(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.Chronology);
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DurationField, param2: org.joda.time.DateTimeFieldType);
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public constructor(param0: org.joda.time.DateTimeField);
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType);
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class MillisDurationField extends org.joda.time.DurationField implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.field.MillisDurationField>;
					public static INSTANCE: org.joda.time.DurationField;
					public isSupported(): boolean;
					public isPrecise(): boolean;
					public getMillis(param0: number): number;
					public getValueAsLong(param0: number, param1: number): number;
					public equals(obj: any): boolean;
					public getDifference(param0: number, param1: number): number;
					public getType(): org.joda.time.DurationFieldType;
					public getMillis(param0: number, param1: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public getUnitMillis(): number;
					public equals(param0: any): boolean;
					public compareTo(param0: org.joda.time.DurationField): number;
					public toString(): string;
					public getValue(param0: number): number;
					public getValue(param0: number, param1: number): number;
					public getName(): string;
					public add(param0: number, param1: number): number;
					public getValueAsLong(param0: number): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class OffsetDateTimeField extends org.joda.time.field.DecoratedDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.OffsetDateTimeField>;
					public addWrapField(param0: number, param1: number): number;
					public getMinimumValue(param0: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: number);
					public roundHalfEven(param0: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType, param2: number);
					public roundHalfFloor(param0: number): number;
					public getOffset(): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType, param2: number, param3: number, param4: number);
					public roundHalfCeiling(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public roundCeiling(param0: number): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public constructor();
					public getMaximumValue(): number;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public roundFloor(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public getLeapDurationField(): org.joda.time.DurationField;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public remainder(param0: number): number;
					public getLeapAmount(param0: number): number;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType);
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public add(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public constructor(param0: org.joda.time.DateTimeFieldType);
					public isLeap(param0: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class PreciseDateTimeField extends org.joda.time.field.PreciseDurationDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.PreciseDateTimeField>;
					public constructor(param0: org.joda.time.DateTimeFieldType, param1: org.joda.time.DurationField);
					public addWrapField(param0: number, param1: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public set(param0: number, param1: number): number;
					public getRange(): number;
					public getMaximumValue(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public get(param0: number): number;
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string): number;
					public constructor();
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public constructor(param0: org.joda.time.DateTimeFieldType);
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public constructor(param0: org.joda.time.DateTimeFieldType, param1: org.joda.time.DurationField, param2: org.joda.time.DurationField);
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export abstract class PreciseDurationDateTimeField extends org.joda.time.field.BaseDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.PreciseDurationDateTimeField>;
					public constructor(param0: org.joda.time.DateTimeFieldType, param1: org.joda.time.DurationField);
					public remainder(param0: number): number;
					public getMinimumValue(param0: number): number;
					public isLenient(): boolean;
					public getDurationField(): org.joda.time.DurationField;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getUnitMillis(): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public roundCeiling(param0: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: number, param1: string): number;
					public constructor();
					public roundFloor(param0: number): number;
					public getMaximumValueForSet(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public constructor(param0: org.joda.time.DateTimeFieldType);
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class PreciseDurationField extends org.joda.time.field.BaseDurationField {
					public static class: java.lang.Class<org.joda.time.field.PreciseDurationField>;
					public isPrecise(): boolean;
					public getMillis(param0: number): number;
					public getValueAsLong(param0: number, param1: number): number;
					public equals(obj: any): boolean;
					public getMillis(param0: number, param1: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public getUnitMillis(): number;
					public equals(param0: any): boolean;
					public constructor(param0: org.joda.time.DurationFieldType);
					public constructor();
					public add(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DurationFieldType, param1: number);
					public getValueAsLong(param0: number): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class RemainderDateTimeField extends org.joda.time.field.DecoratedDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.RemainderDateTimeField>;
					public addWrapField(param0: number, param1: number): number;
					public getMinimumValue(param0: number): number;
					public roundHalfEven(param0: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType, param2: number);
					public roundHalfFloor(param0: number): number;
					public roundHalfCeiling(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public constructor(param0: org.joda.time.field.DividedDateTimeField, param1: org.joda.time.DateTimeFieldType);
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public roundCeiling(param0: number): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public constructor();
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public roundFloor(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public getDivisor(): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public remainder(param0: number): number;
					public getDurationField(): org.joda.time.DurationField;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType);
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public constructor(param0: org.joda.time.field.DividedDateTimeField, param1: org.joda.time.DurationField, param2: org.joda.time.DateTimeFieldType);
					public constructor(param0: org.joda.time.field.DividedDateTimeField);
					public getMinimumValue(): number;
					public constructor(param0: org.joda.time.DateTimeFieldType);
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DurationField, param2: org.joda.time.DateTimeFieldType, param3: number);
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class ScaledDurationField extends org.joda.time.field.DecoratedDurationField {
					public static class: java.lang.Class<org.joda.time.field.ScaledDurationField>;
					public getMillis(param0: number): number;
					public getValueAsLong(param0: number, param1: number): number;
					public equals(obj: any): boolean;
					public getDifference(param0: number, param1: number): number;
					public getMillis(param0: number, param1: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DurationField, param1: org.joda.time.DurationFieldType, param2: number);
					public getUnitMillis(): number;
					public equals(param0: any): boolean;
					public getValue(param0: number): number;
					public getValue(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DurationFieldType);
					public getScalar(): number;
					public constructor();
					public add(param0: number, param1: number): number;
					public getValueAsLong(param0: number): number;
					public hashCode(): number;
					public constructor(param0: org.joda.time.DurationField, param1: org.joda.time.DurationFieldType);
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class SkipDateTimeField extends org.joda.time.field.DelegatedDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.SkipDateTimeField>;
					public getMinimumValue(param0: number): number;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public constructor(param0: org.joda.time.Chronology, param1: org.joda.time.DateTimeField, param2: number);
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DurationField, param2: org.joda.time.DateTimeFieldType);
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType);
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public constructor();
					public getMinimumValue(): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public constructor(param0: org.joda.time.DateTimeField);
					public constructor(param0: org.joda.time.Chronology, param1: org.joda.time.DateTimeField);
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class SkipUndoDateTimeField extends org.joda.time.field.DelegatedDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.SkipUndoDateTimeField>;
					public getMinimumValue(param0: number): number;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public constructor(param0: org.joda.time.Chronology, param1: org.joda.time.DateTimeField, param2: number);
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DurationField, param2: org.joda.time.DateTimeFieldType);
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType);
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public constructor();
					public getMinimumValue(): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public constructor(param0: org.joda.time.DateTimeField);
					public constructor(param0: org.joda.time.Chronology, param1: org.joda.time.DateTimeField);
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class StrictDateTimeField extends org.joda.time.field.DelegatedDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.StrictDateTimeField>;
					public isLenient(): boolean;
					public set(param0: number, param1: string): number;
					public constructor();
					public set(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DurationField, param2: org.joda.time.DateTimeFieldType);
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public constructor(param0: org.joda.time.DateTimeField);
					public static getInstance(param0: org.joda.time.DateTimeField): org.joda.time.DateTimeField;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType);
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class UnsupportedDateTimeField extends org.joda.time.DateTimeField implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.field.UnsupportedDateTimeField>;
					public static getInstance(param0: org.joda.time.DateTimeFieldType, param1: org.joda.time.DurationField): org.joda.time.field.UnsupportedDateTimeField;
					public isSupported(): boolean;
					public addWrapField(param0: number, param1: number): number;
					public getMinimumValue(param0: number): number;
					public isLenient(): boolean;
					public getDifference(param0: number, param1: number): number;
					public roundHalfEven(param0: number): number;
					public roundHalfFloor(param0: number): number;
					public getAsShortText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public roundHalfCeiling(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public roundCeiling(param0: number): number;
					public get(param0: number): number;
					public getAsShortText(param0: number): string;
					public toString(): string;
					public getAsText(param0: number): string;
					public set(param0: number, param1: string): number;
					public getRangeDurationField(): org.joda.time.DurationField;
					public getMaximumValue(): number;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public getMaximumTextLength(param0: java.util.Locale): number;
					public roundFloor(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public getAsShortText(param0: number, param1: java.util.Locale): string;
					public getLeapDurationField(): org.joda.time.DurationField;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public remainder(param0: number): number;
					public getMaximumShortTextLength(param0: java.util.Locale): number;
					public getDurationField(): org.joda.time.DurationField;
					public getAsText(param0: number, param1: java.util.Locale): string;
					public getLeapAmount(param0: number): number;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public addWrapPartial(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public getAsText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public getName(): string;
					public add(param0: number, param1: number): number;
					public getAsText(param0: org.joda.time.ReadablePartial, param1: number, param2: java.util.Locale): string;
					public getMinimumValue(): number;
					public isLeap(param0: number): boolean;
					public getType(): org.joda.time.DateTimeFieldType;
					public getAsShortText(param0: org.joda.time.ReadablePartial, param1: java.util.Locale): string;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class UnsupportedDurationField extends org.joda.time.DurationField implements java.io.Serializable {
					public static class: java.lang.Class<org.joda.time.field.UnsupportedDurationField>;
					public isSupported(): boolean;
					public isPrecise(): boolean;
					public getMillis(param0: number): number;
					public getValueAsLong(param0: number, param1: number): number;
					public equals(obj: any): boolean;
					public getDifference(param0: number, param1: number): number;
					public static getInstance(param0: org.joda.time.DurationFieldType): org.joda.time.field.UnsupportedDurationField;
					public getType(): org.joda.time.DurationFieldType;
					public getMillis(param0: number, param1: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public getUnitMillis(): number;
					public equals(param0: any): boolean;
					public compareTo(param0: org.joda.time.DurationField): number;
					public toString(): string;
					public getValue(param0: number): number;
					public getValue(param0: number, param1: number): number;
					public getName(): string;
					public add(param0: number, param1: number): number;
					public getValueAsLong(param0: number): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module field {
				export class ZeroIsMaxDateTimeField extends org.joda.time.field.DecoratedDateTimeField {
					public static class: java.lang.Class<org.joda.time.field.ZeroIsMaxDateTimeField>;
					public addWrapField(param0: number, param1: number): number;
					public getMinimumValue(param0: number): number;
					public getDifference(param0: number, param1: number): number;
					public roundHalfEven(param0: number): number;
					public roundHalfFloor(param0: number): number;
					public roundHalfCeiling(param0: number): number;
					public getMaximumValue(param0: org.joda.time.ReadablePartial): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public set(param0: number, param1: string, param2: java.util.Locale): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial): number;
					public roundCeiling(param0: number): number;
					public get(param0: number): number;
					public set(param0: number, param1: string): number;
					public constructor();
					public getMaximumValue(): number;
					public add(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public roundFloor(param0: number): number;
					public set(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: string, param4: java.util.Locale): number[];
					public getLeapDurationField(): org.joda.time.DurationField;
					public getMaximumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public remainder(param0: number): number;
					public getLeapAmount(param0: number): number;
					public set(param0: number, param1: number): number;
					public getMinimumValue(param0: org.joda.time.ReadablePartial, param1: number[]): number;
					public getMaximumValue(param0: number): number;
					public getDifferenceAsLong(param0: number, param1: number): number;
					public constructor(param0: org.joda.time.DateTimeField, param1: org.joda.time.DateTimeFieldType);
					public addWrapField(param0: org.joda.time.ReadablePartial, param1: number, param2: number[], param3: number): number[];
					public add(param0: number, param1: number): number;
					public getMinimumValue(): number;
					public constructor(param0: org.joda.time.DateTimeFieldType);
					public isLeap(param0: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class DateTimeFormat extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.DateTimeFormat>;
					public static fullDateTime(): org.joda.time.format.DateTimeFormatter;
					public static longDate(): org.joda.time.format.DateTimeFormatter;
					public static fullTime(): org.joda.time.format.DateTimeFormatter;
					public static mediumTime(): org.joda.time.format.DateTimeFormatter;
					public static mediumDateTime(): org.joda.time.format.DateTimeFormatter;
					public static patternForStyle(param0: string, param1: java.util.Locale): string;
					public static shortDate(): org.joda.time.format.DateTimeFormatter;
					public static forPattern(param0: string): org.joda.time.format.DateTimeFormatter;
					public static shortDateTime(): org.joda.time.format.DateTimeFormatter;
					public static mediumDate(): org.joda.time.format.DateTimeFormatter;
					public constructor();
					public static longTime(): org.joda.time.format.DateTimeFormatter;
					public static shortTime(): org.joda.time.format.DateTimeFormatter;
					public static forStyle(param0: string): org.joda.time.format.DateTimeFormatter;
					public static fullDate(): org.joda.time.format.DateTimeFormatter;
					public static longDateTime(): org.joda.time.format.DateTimeFormatter;
				}
				export module DateTimeFormat {
					export class StyleFormatter extends java.lang.Object implements org.joda.time.format.InternalPrinter, org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormat.StyleFormatter>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class StyleFormatterCacheKey extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormat.StyleFormatterCacheKey>;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: number, param1: number, param2: number, param3: java.util.Locale);
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class DateTimeFormatter extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.DateTimeFormatter>;
					public isPrinter(): boolean;
					public getParser(): org.joda.time.format.DateTimeParser;
					public printTo(param0: java.lang.StringBuilder, param1: org.joda.time.ReadableInstant): void;
					public printTo(param0: java.lang.Appendable, param1: number): void;
					public printTo(param0: java.lang.StringBuilder, param1: number): void;
					public withChronology(param0: org.joda.time.Chronology): org.joda.time.format.DateTimeFormatter;
					public printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePartial): void;
					public isParser(): boolean;
					public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadableInstant): void;
					public getLocale(): java.util.Locale;
					public withPivotYear(param0: java.lang.Integer): org.joda.time.format.DateTimeFormatter;
					public withPivotYear(param0: number): org.joda.time.format.DateTimeFormatter;
					public withDefaultYear(param0: number): org.joda.time.format.DateTimeFormatter;
					public printTo(param0: java.io.Writer, param1: number): void;
					public constructor(param0: org.joda.time.format.DateTimePrinter, param1: org.joda.time.format.DateTimeParser);
					public parseInto(param0: org.joda.time.ReadWritableInstant, param1: string, param2: number): number;
					public getChronology(): org.joda.time.Chronology;
					public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadableInstant): void;
					public getPivotYear(): java.lang.Integer;
					public withZoneUTC(): org.joda.time.format.DateTimeFormatter;
					public parseLocalDate(param0: string): org.joda.time.LocalDate;
					public print(param0: org.joda.time.ReadableInstant): string;
					public isOffsetParsed(): boolean;
					public parseMutableDateTime(param0: string): org.joda.time.MutableDateTime;
					public parseMillis(param0: string): number;
					public withLocale(param0: java.util.Locale): org.joda.time.format.DateTimeFormatter;
					public printTo(param0: java.lang.StringBuilder, param1: org.joda.time.ReadablePartial): void;
					public printTo(param0: java.io.Writer, param1: org.joda.time.ReadableInstant): void;
					public printTo(param0: java.lang.StringBuffer, param1: number): void;
					public parseDateTime(param0: string): org.joda.time.DateTime;
					public withOffsetParsed(): org.joda.time.format.DateTimeFormatter;
					public getZone(): org.joda.time.DateTimeZone;
					public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePartial): void;
					public parseLocalTime(param0: string): org.joda.time.LocalTime;
					/** @deprecated */
					public getChronolgy(): org.joda.time.Chronology;
					public parseLocalDateTime(param0: string): org.joda.time.LocalDateTime;
					public print(param0: number): string;
					public getDefaultYear(): number;
					public withZone(param0: org.joda.time.DateTimeZone): org.joda.time.format.DateTimeFormatter;
					public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial): void;
					public print(param0: org.joda.time.ReadablePartial): string;
					public getPrinter(): org.joda.time.format.DateTimePrinter;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class DateTimeFormatterBuilder extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder>;
					public appendHourOfHalfday(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendLiteral(param0: string): org.joda.time.format.DateTimeFormatterBuilder;
					public appendWeekyear(param0: number, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendTwoDigitYear(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendHalfdayOfDayText(): org.joda.time.format.DateTimeFormatterBuilder;
					public appendTimeZoneName(): org.joda.time.format.DateTimeFormatterBuilder;
					public appendDayOfWeekText(): org.joda.time.format.DateTimeFormatterBuilder;
					public appendFractionOfDay(param0: number, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendTwoDigitWeekyear(param0: number, param1: boolean): org.joda.time.format.DateTimeFormatterBuilder;
					public appendSignedDecimal(param0: org.joda.time.DateTimeFieldType, param1: number, param2: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendMonthOfYear(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendClockhourOfHalfday(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public constructor();
					public appendTwoDigitYear(param0: number, param1: boolean): org.joda.time.format.DateTimeFormatterBuilder;
					public appendDayOfWeekShortText(): org.joda.time.format.DateTimeFormatterBuilder;
					public appendTimeZoneOffset(param0: string, param1: boolean, param2: number, param3: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendPattern(param0: string): org.joda.time.format.DateTimeFormatterBuilder;
					public appendFixedSignedDecimal(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendFractionOfMinute(param0: number, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendClockhourOfDay(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendFraction(param0: org.joda.time.DateTimeFieldType, param1: number, param2: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendTimeZoneShortName(): org.joda.time.format.DateTimeFormatterBuilder;
					public appendDayOfWeek(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendOptional(param0: org.joda.time.format.DateTimeParser): org.joda.time.format.DateTimeFormatterBuilder;
					public appendYear(param0: number, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendDayOfMonth(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendShortText(param0: org.joda.time.DateTimeFieldType): org.joda.time.format.DateTimeFormatterBuilder;
					public appendYearOfCentury(param0: number, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public toFormatter(): org.joda.time.format.DateTimeFormatter;
					public appendFractionOfSecond(param0: number, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendFixedDecimal(param0: org.joda.time.DateTimeFieldType, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendYearOfEra(param0: number, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendMillisOfSecond(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendSecondOfMinute(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public canBuildFormatter(): boolean;
					public appendMonthOfYearShortText(): org.joda.time.format.DateTimeFormatterBuilder;
					public appendTimeZoneName(param0: java.util.Map<string,org.joda.time.DateTimeZone>): org.joda.time.format.DateTimeFormatterBuilder;
					public toPrinter(): org.joda.time.format.DateTimePrinter;
					public canBuildPrinter(): boolean;
					public appendTimeZoneOffset(param0: string, param1: string, param2: boolean, param3: number, param4: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendFractionOfHour(param0: number, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendMinuteOfDay(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendWeekOfWeekyear(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendSecondOfDay(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendText(param0: org.joda.time.DateTimeFieldType): org.joda.time.format.DateTimeFormatterBuilder;
					public appendCenturyOfEra(param0: number, param1: number): org.joda.time.format.DateTimeFormatterBuilder;
					public append(param0: org.joda.time.format.DateTimeParser): org.joda.time.format.DateTimeFormatterBuilder;
					public appendDayOfYear(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public clear(): void;
					public append(param0: org.joda.time.format.DateTimePrinter, param1: org.joda.time.format.DateTimeParser): org.joda.time.format.DateTimeFormatterBuilder;
					public appendMinuteOfHour(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendMillisOfDay(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public append(param0: org.joda.time.format.DateTimeFormatter): org.joda.time.format.DateTimeFormatterBuilder;
					public appendTimeZoneShortName(param0: java.util.Map<string,org.joda.time.DateTimeZone>): org.joda.time.format.DateTimeFormatterBuilder;
					public toParser(): org.joda.time.format.DateTimeParser;
					public appendDecimal(param0: org.joda.time.DateTimeFieldType, param1: number, param2: number): org.joda.time.format.DateTimeFormatterBuilder;
					public appendMonthOfYearText(): org.joda.time.format.DateTimeFormatterBuilder;
					public appendHourOfDay(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public append(param0: org.joda.time.format.DateTimePrinter): org.joda.time.format.DateTimeFormatterBuilder;
					public appendTimeZoneId(): org.joda.time.format.DateTimeFormatterBuilder;
					public appendEraText(): org.joda.time.format.DateTimeFormatterBuilder;
					public append(param0: org.joda.time.format.DateTimePrinter, param1: org.joda.time.format.DateTimeParser[]): org.joda.time.format.DateTimeFormatterBuilder;
					public appendTwoDigitWeekyear(param0: number): org.joda.time.format.DateTimeFormatterBuilder;
					public canBuildParser(): boolean;
				}
				export module DateTimeFormatterBuilder {
					export class CharacterLiteral extends java.lang.Object implements org.joda.time.format.InternalPrinter, org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.CharacterLiteral>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class Composite extends java.lang.Object implements org.joda.time.format.InternalPrinter, org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.Composite>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class FixedNumber extends org.joda.time.format.DateTimeFormatterBuilder.PaddedNumber {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.FixedNumber>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public constructor(param0: org.joda.time.DateTimeFieldType, param1: number, param2: boolean, param3: number);
						public estimateParsedLength(): number;
						public estimatePrintedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public constructor(param0: org.joda.time.DateTimeFieldType, param1: number, param2: boolean);
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class Fraction extends java.lang.Object implements org.joda.time.format.InternalPrinter, org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.Fraction>;
						public iMinDigits: number;
						public iMaxDigits: number;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology): void;
						public constructor(param0: org.joda.time.DateTimeFieldType, param1: number, param2: number);
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class MatchingParser extends java.lang.Object implements org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.MatchingParser>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimateParsedLength(): number;
					}
					export abstract class NumberFormatter extends java.lang.Object implements org.joda.time.format.InternalPrinter, org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.NumberFormatter>;
						public iFieldType: org.joda.time.DateTimeFieldType;
						public iMaxParsedDigits: number;
						public iSigned: boolean;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimateParsedLength(): number;
						public estimatePrintedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class PaddedNumber extends org.joda.time.format.DateTimeFormatterBuilder.NumberFormatter {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.PaddedNumber>;
						public iMinPrintedDigits: number;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public constructor(param0: org.joda.time.DateTimeFieldType, param1: number, param2: boolean, param3: number);
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class StringLiteral extends java.lang.Object implements org.joda.time.format.InternalPrinter, org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.StringLiteral>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class TextField extends java.lang.Object implements org.joda.time.format.InternalPrinter, org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.TextField>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class TimeZoneId {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.TimeZoneId>;
						public static INSTANCE: org.joda.time.format.DateTimeFormatterBuilder.TimeZoneId;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public static valueOf(param0: string): org.joda.time.format.DateTimeFormatterBuilder.TimeZoneId;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): org.joda.time.format.DateTimeFormatterBuilder.TimeZoneId[];
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class TimeZoneName extends java.lang.Object implements org.joda.time.format.InternalPrinter, org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.TimeZoneName>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class TimeZoneOffset extends java.lang.Object implements org.joda.time.format.InternalPrinter, org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.TimeZoneOffset>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class TwoDigitYear extends java.lang.Object implements org.joda.time.format.InternalPrinter, org.joda.time.format.InternalParser {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.TwoDigitYear>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimateParsedLength(): number;
						public estimatePrintedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
					export class UnpaddedNumber extends org.joda.time.format.DateTimeFormatterBuilder.NumberFormatter {
						public static class: java.lang.Class<org.joda.time.format.DateTimeFormatterBuilder.UnpaddedNumber>;
						public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
						public estimatePrintedLength(): number;
						public estimateParsedLength(): number;
						public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						public constructor(param0: org.joda.time.DateTimeFieldType, param1: number, param2: boolean);
						public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class DateTimeParser extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.DateTimeParser>;
					/**
					 * Constructs a new instance of the org.joda.time.format.DateTimeParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						estimateParsedLength(): number;
						parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
					});
					public constructor();
					public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
					public estimateParsedLength(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class DateTimeParserBucket extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.DateTimeParserBucket>;
					public reset(): void;
					public parseMillis(param0: org.joda.time.format.DateTimeParser, param1: string): number;
					public setZone(param0: org.joda.time.DateTimeZone): void;
					public computeMillis(param0: boolean): number;
					/** @deprecated */
					public setOffset(param0: number): void;
					/** @deprecated */
					public getOffset(): number;
					public constructor(param0: number, param1: org.joda.time.Chronology, param2: java.util.Locale, param3: java.lang.Integer, param4: number);
					public getZone(): org.joda.time.DateTimeZone;
					public computeMillis(param0: boolean, param1: string): number;
					public getLocale(): java.util.Locale;
					/** @deprecated */
					public setPivotYear(param0: java.lang.Integer): void;
					public setOffset(param0: java.lang.Integer): void;
					/** @deprecated */
					public constructor(param0: number, param1: org.joda.time.Chronology, param2: java.util.Locale);
					public saveField(param0: org.joda.time.DateTimeField, param1: number): void;
					/** @deprecated */
					public constructor(param0: number, param1: org.joda.time.Chronology, param2: java.util.Locale, param3: java.lang.Integer);
					public computeMillis(): number;
					public getOffsetInteger(): java.lang.Integer;
					public saveField(param0: org.joda.time.DateTimeFieldType, param1: string, param2: java.util.Locale): void;
					public saveState(): any;
					public getChronology(): org.joda.time.Chronology;
					public restoreState(param0: any): boolean;
					public getPivotYear(): java.lang.Integer;
					public saveField(param0: org.joda.time.DateTimeFieldType, param1: number): void;
				}
				export module DateTimeParserBucket {
					export class SavedField extends java.lang.Comparable<org.joda.time.format.DateTimeParserBucket.SavedField> {
						public static class: java.lang.Class<org.joda.time.format.DateTimeParserBucket.SavedField>;
						public compareTo(param0: org.joda.time.format.DateTimeParserBucket.SavedField): number;
					}
					export class SavedState extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.format.DateTimeParserBucket.SavedState>;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class DateTimeParserInternalParser extends java.lang.Object implements org.joda.time.format.InternalParser {
					public static class: java.lang.Class<org.joda.time.format.DateTimeParserInternalParser>;
					public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
					public estimateParsedLength(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class DateTimePrinter extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.DateTimePrinter>;
					/**
					 * Constructs a new instance of the org.joda.time.format.DateTimePrinter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						estimatePrintedLength(): number;
						printTo(param0: java.lang.StringBuffer, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						printTo(param0: java.io.Writer, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
						printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					});
					public constructor();
					public printTo(param0: java.lang.StringBuffer, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
					public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					public estimatePrintedLength(): number;
					public printTo(param0: java.io.Writer, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
					public printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class DateTimePrinterInternalPrinter extends java.lang.Object implements org.joda.time.format.InternalPrinter {
					public static class: java.lang.Class<org.joda.time.format.DateTimePrinterInternalPrinter>;
					public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
					public estimatePrintedLength(): number;
					public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class FormatUtils extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.FormatUtils>;
					public static appendPaddedInteger(param0: java.lang.Appendable, param1: number, param2: number): void;
					public static calculateDigitCount(param0: number): number;
					public static writeUnpaddedInteger(param0: java.io.Writer, param1: number): void;
					public static writePaddedInteger(param0: java.io.Writer, param1: number, param2: number): void;
					public static appendUnpaddedInteger(param0: java.lang.Appendable, param1: number): void;
					public static appendPaddedInteger(param0: java.lang.StringBuffer, param1: number, param2: number): void;
					public static appendUnpaddedInteger(param0: java.lang.StringBuffer, param1: number): void;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class ISODateTimeFormat extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.ISODateTimeFormat>;
					public static basicDateTimeNoMillis(): org.joda.time.format.DateTimeFormatter;
					public static basicOrdinalDate(): org.joda.time.format.DateTimeFormatter;
					public static hour(): org.joda.time.format.DateTimeFormatter;
					public static timeParser(): org.joda.time.format.DateTimeFormatter;
					public static date(): org.joda.time.format.DateTimeFormatter;
					public static basicTTimeNoMillis(): org.joda.time.format.DateTimeFormatter;
					public static hourMinuteSecondMillis(): org.joda.time.format.DateTimeFormatter;
					public static basicWeekDate(): org.joda.time.format.DateTimeFormatter;
					public constructor();
					public static forFields(param0: java.util.Collection<org.joda.time.DateTimeFieldType>, param1: boolean, param2: boolean): org.joda.time.format.DateTimeFormatter;
					public static basicWeekDateTimeNoMillis(): org.joda.time.format.DateTimeFormatter;
					public static localDateOptionalTimeParser(): org.joda.time.format.DateTimeFormatter;
					public static dateHourMinute(): org.joda.time.format.DateTimeFormatter;
					public static dateTimeNoMillis(): org.joda.time.format.DateTimeFormatter;
					public static dateParser(): org.joda.time.format.DateTimeFormatter;
					public static year(): org.joda.time.format.DateTimeFormatter;
					public static basicTTime(): org.joda.time.format.DateTimeFormatter;
					public static tTimeNoMillis(): org.joda.time.format.DateTimeFormatter;
					public static weekyearWeekDay(): org.joda.time.format.DateTimeFormatter;
					public static basicTime(): org.joda.time.format.DateTimeFormatter;
					public static weekDateTime(): org.joda.time.format.DateTimeFormatter;
					public static dateHourMinuteSecondFraction(): org.joda.time.format.DateTimeFormatter;
					public static time(): org.joda.time.format.DateTimeFormatter;
					public static basicDate(): org.joda.time.format.DateTimeFormatter;
					public static tTime(): org.joda.time.format.DateTimeFormatter;
					public static hourMinute(): org.joda.time.format.DateTimeFormatter;
					public static hourMinuteSecondFraction(): org.joda.time.format.DateTimeFormatter;
					public static hourMinuteSecond(): org.joda.time.format.DateTimeFormatter;
					public static dateHour(): org.joda.time.format.DateTimeFormatter;
					public static dateTimeParser(): org.joda.time.format.DateTimeFormatter;
					public static localDateParser(): org.joda.time.format.DateTimeFormatter;
					public static basicOrdinalDateTime(): org.joda.time.format.DateTimeFormatter;
					public static weekDateTimeNoMillis(): org.joda.time.format.DateTimeFormatter;
					public static basicDateTime(): org.joda.time.format.DateTimeFormatter;
					public static yearMonthDay(): org.joda.time.format.DateTimeFormatter;
					public static dateOptionalTimeParser(): org.joda.time.format.DateTimeFormatter;
					public static dateTime(): org.joda.time.format.DateTimeFormatter;
					public static timeElementParser(): org.joda.time.format.DateTimeFormatter;
					public static timeNoMillis(): org.joda.time.format.DateTimeFormatter;
					public static basicWeekDateTime(): org.joda.time.format.DateTimeFormatter;
					public static dateElementParser(): org.joda.time.format.DateTimeFormatter;
					public static dateHourMinuteSecondMillis(): org.joda.time.format.DateTimeFormatter;
					public static localTimeParser(): org.joda.time.format.DateTimeFormatter;
					public static basicOrdinalDateTimeNoMillis(): org.joda.time.format.DateTimeFormatter;
					public static ordinalDateTimeNoMillis(): org.joda.time.format.DateTimeFormatter;
					public static ordinalDate(): org.joda.time.format.DateTimeFormatter;
					public static weekDate(): org.joda.time.format.DateTimeFormatter;
					public static weekyearWeek(): org.joda.time.format.DateTimeFormatter;
					public static ordinalDateTime(): org.joda.time.format.DateTimeFormatter;
					public static yearMonth(): org.joda.time.format.DateTimeFormatter;
					public static dateHourMinuteSecond(): org.joda.time.format.DateTimeFormatter;
					public static basicTimeNoMillis(): org.joda.time.format.DateTimeFormatter;
					public static weekyear(): org.joda.time.format.DateTimeFormatter;
				}
				export module ISODateTimeFormat {
					export class Constants extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.format.ISODateTimeFormat.Constants>;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class ISOPeriodFormat extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.ISOPeriodFormat>;
					public static alternateExtended(): org.joda.time.format.PeriodFormatter;
					public constructor();
					public static standard(): org.joda.time.format.PeriodFormatter;
					public static alternate(): org.joda.time.format.PeriodFormatter;
					public static alternateWithWeeks(): org.joda.time.format.PeriodFormatter;
					public static alternateExtendedWithWeeks(): org.joda.time.format.PeriodFormatter;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class InternalParser extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.InternalParser>;
					/**
					 * Constructs a new instance of the org.joda.time.format.InternalParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						estimateParsedLength(): number;
						parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
					});
					public constructor();
					public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
					public estimateParsedLength(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class InternalParserDateTimeParser extends java.lang.Object implements org.joda.time.format.DateTimeParser, org.joda.time.format.InternalParser {
					public static class: java.lang.Class<org.joda.time.format.InternalParserDateTimeParser>;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public parseInto(param0: org.joda.time.format.DateTimeParserBucket, param1: string, param2: number): number;
					public hashCode(): number;
					public estimateParsedLength(): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class InternalPrinter extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.InternalPrinter>;
					/**
					 * Constructs a new instance of the org.joda.time.format.InternalPrinter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						estimatePrintedLength(): number;
						printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
						printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					});
					public constructor();
					public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
					public estimatePrintedLength(): number;
					public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class InternalPrinterDateTimePrinter extends java.lang.Object implements org.joda.time.format.DateTimePrinter, org.joda.time.format.InternalPrinter {
					public static class: java.lang.Class<org.joda.time.format.InternalPrinterDateTimePrinter>;
					public printTo(param0: java.lang.StringBuffer, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					public printTo(param0: java.lang.Appendable, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
					public estimatePrintedLength(): number;
					public printTo(param0: java.io.Writer, param1: number, param2: org.joda.time.Chronology, param3: number, param4: org.joda.time.DateTimeZone, param5: java.util.Locale): void;
					public printTo(param0: java.lang.Appendable, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
					public hashCode(): number;
					public printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePartial, param2: java.util.Locale): void;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class PeriodFormat extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.PeriodFormat>;
					public static wordBased(param0: java.util.Locale): org.joda.time.format.PeriodFormatter;
					public constructor();
					public static getDefault(): org.joda.time.format.PeriodFormatter;
					public static wordBased(): org.joda.time.format.PeriodFormatter;
				}
				export module PeriodFormat {
					export class DynamicWordBased extends java.lang.Object implements org.joda.time.format.PeriodPrinter, org.joda.time.format.PeriodParser {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormat.DynamicWordBased>;
						public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						public printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						public calculatePrintedLength(param0: org.joda.time.ReadablePeriod, param1: java.util.Locale): number;
						public parseInto(param0: org.joda.time.ReadWritablePeriod, param1: string, param2: number, param3: java.util.Locale): number;
						public countFieldsToPrint(param0: org.joda.time.ReadablePeriod, param1: number, param2: java.util.Locale): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class PeriodFormatter extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.PeriodFormatter>;
					public isPrinter(): boolean;
					public withParseType(param0: org.joda.time.PeriodType): org.joda.time.format.PeriodFormatter;
					public parseInto(param0: org.joda.time.ReadWritablePeriod, param1: string, param2: number): number;
					public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePeriod): void;
					public constructor(param0: org.joda.time.format.PeriodPrinter, param1: org.joda.time.format.PeriodParser);
					public isParser(): boolean;
					public getParser(): org.joda.time.format.PeriodParser;
					public getLocale(): java.util.Locale;
					public getParseType(): org.joda.time.PeriodType;
					public print(param0: org.joda.time.ReadablePeriod): string;
					public getPrinter(): org.joda.time.format.PeriodPrinter;
					public withLocale(param0: java.util.Locale): org.joda.time.format.PeriodFormatter;
					public parsePeriod(param0: string): org.joda.time.Period;
					public printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePeriod): void;
					public parseMutablePeriod(param0: string): org.joda.time.MutablePeriod;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class PeriodFormatterBuilder extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder>;
					public appendMillis3Digit(): org.joda.time.format.PeriodFormatterBuilder;
					public appendWeeks(): org.joda.time.format.PeriodFormatterBuilder;
					public toFormatter(): org.joda.time.format.PeriodFormatter;
					public append(param0: org.joda.time.format.PeriodFormatter): org.joda.time.format.PeriodFormatterBuilder;
					public appendYears(): org.joda.time.format.PeriodFormatterBuilder;
					public minimumPrintedDigits(param0: number): org.joda.time.format.PeriodFormatterBuilder;
					public printZeroAlways(): org.joda.time.format.PeriodFormatterBuilder;
					public appendSeparatorIfFieldsAfter(param0: string): org.joda.time.format.PeriodFormatterBuilder;
					public appendSeparator(param0: string, param1: string, param2: string[]): org.joda.time.format.PeriodFormatterBuilder;
					public constructor();
					public append(param0: org.joda.time.format.PeriodPrinter, param1: org.joda.time.format.PeriodParser): org.joda.time.format.PeriodFormatterBuilder;
					public printZeroRarelyFirst(): org.joda.time.format.PeriodFormatterBuilder;
					public appendMonths(): org.joda.time.format.PeriodFormatterBuilder;
					public toParser(): org.joda.time.format.PeriodParser;
					public clear(): void;
					public appendPrefix(param0: string[], param1: string[]): org.joda.time.format.PeriodFormatterBuilder;
					public printZeroNever(): org.joda.time.format.PeriodFormatterBuilder;
					public appendSecondsWithMillis(): org.joda.time.format.PeriodFormatterBuilder;
					public appendMinutes(): org.joda.time.format.PeriodFormatterBuilder;
					public maximumParsedDigits(param0: number): org.joda.time.format.PeriodFormatterBuilder;
					public appendSuffix(param0: string[], param1: string[]): org.joda.time.format.PeriodFormatterBuilder;
					public appendMillis(): org.joda.time.format.PeriodFormatterBuilder;
					public appendSuffix(param0: string): org.joda.time.format.PeriodFormatterBuilder;
					public appendSuffix(param0: string, param1: string): org.joda.time.format.PeriodFormatterBuilder;
					public appendSeparator(param0: string): org.joda.time.format.PeriodFormatterBuilder;
					public rejectSignedValues(param0: boolean): org.joda.time.format.PeriodFormatterBuilder;
					public printZeroIfSupported(): org.joda.time.format.PeriodFormatterBuilder;
					public appendPrefix(param0: string): org.joda.time.format.PeriodFormatterBuilder;
					public appendSeparatorIfFieldsBefore(param0: string): org.joda.time.format.PeriodFormatterBuilder;
					public appendLiteral(param0: string): org.joda.time.format.PeriodFormatterBuilder;
					public appendSecondsWithOptionalMillis(): org.joda.time.format.PeriodFormatterBuilder;
					public appendDays(): org.joda.time.format.PeriodFormatterBuilder;
					public toPrinter(): org.joda.time.format.PeriodPrinter;
					public appendPrefix(param0: string, param1: string): org.joda.time.format.PeriodFormatterBuilder;
					public appendSeconds(): org.joda.time.format.PeriodFormatterBuilder;
					public appendHours(): org.joda.time.format.PeriodFormatterBuilder;
					public appendSeparator(param0: string, param1: string): org.joda.time.format.PeriodFormatterBuilder;
					public printZeroRarelyLast(): org.joda.time.format.PeriodFormatterBuilder;
				}
				export module PeriodFormatterBuilder {
					export class Composite extends java.lang.Object implements org.joda.time.format.PeriodPrinter, org.joda.time.format.PeriodParser {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder.Composite>;
						public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						public printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						public calculatePrintedLength(param0: org.joda.time.ReadablePeriod, param1: java.util.Locale): number;
						public parseInto(param0: org.joda.time.ReadWritablePeriod, param1: string, param2: number, param3: java.util.Locale): number;
						public countFieldsToPrint(param0: org.joda.time.ReadablePeriod, param1: number, param2: java.util.Locale): number;
					}
					export class CompositeAffix extends org.joda.time.format.PeriodFormatterBuilder.IgnorableAffix {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder.CompositeAffix>;
						public printTo(param0: java.io.Writer, param1: number): void;
						public scan(param0: string, param1: number): number;
						public parse(param0: string, param1: number): number;
						public printTo(param0: java.lang.StringBuffer, param1: number): void;
						public getAffixes(): string[];
						public finish(param0: java.util.Set<org.joda.time.format.PeriodFormatterBuilder.PeriodFieldAffix>): void;
						public calculatePrintedLength(param0: number): number;
					}
					export class FieldFormatter extends java.lang.Object implements org.joda.time.format.PeriodPrinter, org.joda.time.format.PeriodParser {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder.FieldFormatter>;
						public finish(param0: org.joda.time.format.PeriodFormatterBuilder.FieldFormatter[]): void;
						public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						public printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						public calculatePrintedLength(param0: org.joda.time.ReadablePeriod, param1: java.util.Locale): number;
						public parseInto(param0: org.joda.time.ReadWritablePeriod, param1: string, param2: number, param3: java.util.Locale): number;
						public countFieldsToPrint(param0: org.joda.time.ReadablePeriod, param1: number, param2: java.util.Locale): number;
					}
					export abstract class IgnorableAffix extends java.lang.Object implements org.joda.time.format.PeriodFormatterBuilder.PeriodFieldAffix {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder.IgnorableAffix>;
						public printTo(param0: java.io.Writer, param1: number): void;
						public scan(param0: string, param1: number): number;
						public parse(param0: string, param1: number): number;
						public printTo(param0: java.lang.StringBuffer, param1: number): void;
						public getAffixes(): string[];
						public finish(param0: java.util.Set<org.joda.time.format.PeriodFormatterBuilder.PeriodFieldAffix>): void;
						public calculatePrintedLength(param0: number): number;
						public matchesOtherAffix(param0: number, param1: string, param2: number): boolean;
					}
					export class Literal extends java.lang.Object implements org.joda.time.format.PeriodPrinter, org.joda.time.format.PeriodParser {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder.Literal>;
						public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						public printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						public calculatePrintedLength(param0: org.joda.time.ReadablePeriod, param1: java.util.Locale): number;
						public parseInto(param0: org.joda.time.ReadWritablePeriod, param1: string, param2: number, param3: java.util.Locale): number;
						public countFieldsToPrint(param0: org.joda.time.ReadablePeriod, param1: number, param2: java.util.Locale): number;
					}
					export class PeriodFieldAffix extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder.PeriodFieldAffix>;
						/**
						 * Constructs a new instance of the org.joda.time.format.PeriodFormatterBuilder$PeriodFieldAffix interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							calculatePrintedLength(param0: number): number;
							printTo(param0: java.lang.StringBuffer, param1: number): void;
							printTo(param0: java.io.Writer, param1: number): void;
							parse(param0: string, param1: number): number;
							scan(param0: string, param1: number): number;
							getAffixes(): string[];
							finish(param0: java.util.Set<org.joda.time.format.PeriodFormatterBuilder.PeriodFieldAffix>): void;
						});
						public constructor();
						public printTo(param0: java.io.Writer, param1: number): void;
						public scan(param0: string, param1: number): number;
						public parse(param0: string, param1: number): number;
						public printTo(param0: java.lang.StringBuffer, param1: number): void;
						public getAffixes(): string[];
						public finish(param0: java.util.Set<org.joda.time.format.PeriodFormatterBuilder.PeriodFieldAffix>): void;
						public calculatePrintedLength(param0: number): number;
					}
					export class PluralAffix extends org.joda.time.format.PeriodFormatterBuilder.IgnorableAffix {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder.PluralAffix>;
						public printTo(param0: java.io.Writer, param1: number): void;
						public scan(param0: string, param1: number): number;
						public parse(param0: string, param1: number): number;
						public printTo(param0: java.lang.StringBuffer, param1: number): void;
						public getAffixes(): string[];
						public finish(param0: java.util.Set<org.joda.time.format.PeriodFormatterBuilder.PeriodFieldAffix>): void;
						public calculatePrintedLength(param0: number): number;
					}
					export class RegExAffix extends org.joda.time.format.PeriodFormatterBuilder.IgnorableAffix {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder.RegExAffix>;
						public printTo(param0: java.io.Writer, param1: number): void;
						public scan(param0: string, param1: number): number;
						public parse(param0: string, param1: number): number;
						public printTo(param0: java.lang.StringBuffer, param1: number): void;
						public getAffixes(): string[];
						public finish(param0: java.util.Set<org.joda.time.format.PeriodFormatterBuilder.PeriodFieldAffix>): void;
						public calculatePrintedLength(param0: number): number;
					}
					export class Separator extends java.lang.Object implements org.joda.time.format.PeriodPrinter, org.joda.time.format.PeriodParser {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder.Separator>;
						public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						public printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						public calculatePrintedLength(param0: org.joda.time.ReadablePeriod, param1: java.util.Locale): number;
						public parseInto(param0: org.joda.time.ReadWritablePeriod, param1: string, param2: number, param3: java.util.Locale): number;
						public countFieldsToPrint(param0: org.joda.time.ReadablePeriod, param1: number, param2: java.util.Locale): number;
					}
					export class SimpleAffix extends org.joda.time.format.PeriodFormatterBuilder.IgnorableAffix {
						public static class: java.lang.Class<org.joda.time.format.PeriodFormatterBuilder.SimpleAffix>;
						public printTo(param0: java.io.Writer, param1: number): void;
						public scan(param0: string, param1: number): number;
						public parse(param0: string, param1: number): number;
						public printTo(param0: java.lang.StringBuffer, param1: number): void;
						public getAffixes(): string[];
						public finish(param0: java.util.Set<org.joda.time.format.PeriodFormatterBuilder.PeriodFieldAffix>): void;
						public calculatePrintedLength(param0: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class PeriodParser extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.PeriodParser>;
					/**
					 * Constructs a new instance of the org.joda.time.format.PeriodParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						parseInto(param0: org.joda.time.ReadWritablePeriod, param1: string, param2: number, param3: java.util.Locale): number;
					});
					public constructor();
					public parseInto(param0: org.joda.time.ReadWritablePeriod, param1: string, param2: number, param3: java.util.Locale): number;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module format {
				export class PeriodPrinter extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.format.PeriodPrinter>;
					/**
					 * Constructs a new instance of the org.joda.time.format.PeriodPrinter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						calculatePrintedLength(param0: org.joda.time.ReadablePeriod, param1: java.util.Locale): number;
						countFieldsToPrint(param0: org.joda.time.ReadablePeriod, param1: number, param2: java.util.Locale): number;
						printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
						printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
					});
					public constructor();
					public calculatePrintedLength(param0: org.joda.time.ReadablePeriod, param1: java.util.Locale): number;
					public countFieldsToPrint(param0: org.joda.time.ReadablePeriod, param1: number, param2: java.util.Locale): number;
					public printTo(param0: java.lang.StringBuffer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
					public printTo(param0: java.io.Writer, param1: org.joda.time.ReadablePeriod, param2: java.util.Locale): void;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module tz {
				export class CachedDateTimeZone extends org.joda.time.DateTimeZone {
					public static class: java.lang.Class<org.joda.time.tz.CachedDateTimeZone>;
					public equals(param0: any): boolean;
					public getUncachedZone(): org.joda.time.DateTimeZone;
					public getOffset(param0: org.joda.time.ReadableInstant): number;
					public previousTransition(param0: number): number;
					public nextTransition(param0: number): number;
					public getNameKey(param0: number): string;
					public getOffset(param0: number): number;
					public hashCode(): number;
					public isFixed(): boolean;
					public static forZone(param0: org.joda.time.DateTimeZone): org.joda.time.tz.CachedDateTimeZone;
					public getStandardOffset(param0: number): number;
				}
				export module CachedDateTimeZone {
					export class Info extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.tz.CachedDateTimeZone.Info>;
						public iPeriodStart: number;
						public iZoneRef: org.joda.time.DateTimeZone;
						public getNameKey(param0: number): string;
						public getOffset(param0: number): number;
						public getStandardOffset(param0: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module tz {
				export class DateTimeZoneBuilder extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.tz.DateTimeZoneBuilder>;
					public static readFrom(param0: java.io.DataInput, param1: string): org.joda.time.DateTimeZone;
					public setFixedSavings(param0: string, param1: number): org.joda.time.tz.DateTimeZoneBuilder;
					public constructor();
					public addCutover(param0: number, param1: string, param2: number, param3: number, param4: number, param5: boolean, param6: number): org.joda.time.tz.DateTimeZoneBuilder;
					public writeTo(param0: string, param1: java.io.OutputStream): void;
					public setStandardOffset(param0: number): org.joda.time.tz.DateTimeZoneBuilder;
					public addRecurringSavings(param0: string, param1: number, param2: number, param3: number, param4: string, param5: number, param6: number, param7: number, param8: boolean, param9: number): org.joda.time.tz.DateTimeZoneBuilder;
					public toDateTimeZone(param0: string, param1: boolean): org.joda.time.DateTimeZone;
					public writeTo(param0: string, param1: java.io.DataOutput): void;
					public static readFrom(param0: java.io.InputStream, param1: string): org.joda.time.DateTimeZone;
				}
				export module DateTimeZoneBuilder {
					export class DSTZone extends org.joda.time.DateTimeZone {
						public static class: java.lang.Class<org.joda.time.tz.DateTimeZoneBuilder.DSTZone>;
						public isFixed(): boolean;
						public getNameKey(param0: number): string;
						public nextTransition(param0: number): number;
						public previousTransition(param0: number): number;
						public writeTo(param0: java.io.DataOutput): void;
						public getOffset(param0: number): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getOffset(param0: org.joda.time.ReadableInstant): number;
						public getStandardOffset(param0: number): number;
					}
					export class OfYear extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.tz.DateTimeZoneBuilder.OfYear>;
						public equals(obj: any): boolean;
						public next(param0: number, param1: number, param2: number): number;
						public previous(param0: number, param1: number, param2: number): number;
						public setInstant(param0: number, param1: number, param2: number): number;
						public writeTo(param0: java.io.DataOutput): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export class PrecalculatedZone extends org.joda.time.DateTimeZone {
						public static class: java.lang.Class<org.joda.time.tz.DateTimeZoneBuilder.PrecalculatedZone>;
						public isFixed(): boolean;
						public isCachable(): boolean;
						public getNameKey(param0: number): string;
						public nextTransition(param0: number): number;
						public previousTransition(param0: number): number;
						public writeTo(param0: java.io.DataOutput): void;
						public getOffset(param0: number): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getOffset(param0: org.joda.time.ReadableInstant): number;
						public getStandardOffset(param0: number): number;
					}
					export class Recurrence extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.tz.DateTimeZoneBuilder.Recurrence>;
						public getSaveMillis(): number;
						public equals(obj: any): boolean;
						public next(param0: number, param1: number, param2: number): number;
						public getOfYear(): org.joda.time.tz.DateTimeZoneBuilder.OfYear;
						public previous(param0: number, param1: number, param2: number): number;
						public writeTo(param0: java.io.DataOutput): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getNameKey(): string;
						public toString(): string;
					}
					export class Rule extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.tz.DateTimeZoneBuilder.Rule>;
						public getFromYear(): number;
						public getSaveMillis(): number;
						public next(param0: number, param1: number, param2: number): number;
						public getOfYear(): org.joda.time.tz.DateTimeZoneBuilder.OfYear;
						public getToYear(): number;
						public getNameKey(): string;
						public toString(): string;
					}
					export class RuleSet extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.tz.DateTimeZoneBuilder.RuleSet>;
						public setUpperLimit(param0: number, param1: org.joda.time.tz.DateTimeZoneBuilder.OfYear): void;
						public setFixedSavings(param0: string, param1: number): void;
						public getUpperLimit(param0: number): number;
						public nextTransition(param0: number, param1: number): org.joda.time.tz.DateTimeZoneBuilder.Transition;
						public setStandardOffset(param0: number): void;
						public firstTransition(param0: number): org.joda.time.tz.DateTimeZoneBuilder.Transition;
						public getStandardOffset(): number;
						public addRule(param0: org.joda.time.tz.DateTimeZoneBuilder.Rule): void;
						public buildTailZone(param0: string): org.joda.time.tz.DateTimeZoneBuilder.DSTZone;
						public toString(): string;
					}
					export class Transition extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.tz.DateTimeZoneBuilder.Transition>;
						public getSaveMillis(): number;
						public isTransitionFrom(param0: org.joda.time.tz.DateTimeZoneBuilder.Transition): boolean;
						public getMillis(): number;
						public withMillis(param0: number): org.joda.time.tz.DateTimeZoneBuilder.Transition;
						public getNameKey(): string;
						public getWallOffset(): number;
						public getStandardOffset(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module tz {
				export class DefaultNameProvider extends java.lang.Object implements org.joda.time.tz.NameProvider {
					public static class: java.lang.Class<org.joda.time.tz.DefaultNameProvider>;
					public getShortName(param0: java.util.Locale, param1: string, param2: string): string;
					public constructor();
					public getShortName(param0: java.util.Locale, param1: string, param2: string, param3: boolean): string;
					public getName(param0: java.util.Locale, param1: string, param2: string, param3: boolean): string;
					public getName(param0: java.util.Locale, param1: string, param2: string): string;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module tz {
				export class FixedDateTimeZone extends org.joda.time.DateTimeZone {
					public static class: java.lang.Class<org.joda.time.tz.FixedDateTimeZone>;
					public toTimeZone(): java.util.TimeZone;
					public constructor(param0: string);
					public previousTransition(param0: number): number;
					public nextTransition(param0: number): number;
					public getOffset(param0: number): number;
					public getStandardOffset(param0: number): number;
					public equals(param0: any): boolean;
					public getOffset(param0: org.joda.time.ReadableInstant): number;
					public constructor(param0: string, param1: string, param2: number, param3: number);
					public getOffsetFromLocal(param0: number): number;
					public getNameKey(param0: number): string;
					public hashCode(): number;
					public isFixed(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module tz {
				export class NameProvider extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.tz.NameProvider>;
					/**
					 * Constructs a new instance of the org.joda.time.tz.NameProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getShortName(param0: java.util.Locale, param1: string, param2: string): string;
						getName(param0: java.util.Locale, param1: string, param2: string): string;
					});
					public constructor();
					public getShortName(param0: java.util.Locale, param1: string, param2: string): string;
					public getName(param0: java.util.Locale, param1: string, param2: string): string;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module tz {
				export class Provider extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.tz.Provider>;
					/**
					 * Constructs a new instance of the org.joda.time.tz.Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getZone(param0: string): org.joda.time.DateTimeZone;
						getAvailableIDs(): java.util.Set<string>;
					});
					public constructor();
					public getZone(param0: string): org.joda.time.DateTimeZone;
					public getAvailableIDs(): java.util.Set<string>;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module tz {
				export class UTCProvider extends java.lang.Object implements org.joda.time.tz.Provider {
					public static class: java.lang.Class<org.joda.time.tz.UTCProvider>;
					public getZone(param0: string): org.joda.time.DateTimeZone;
					public constructor();
					public getAvailableIDs(): java.util.Set<string>;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module tz {
				export class ZoneInfoCompiler extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.tz.ZoneInfoCompiler>;
					public constructor();
					public static main(param0: string[]): void;
					public compile(param0: java.io.File, param1: java.io.File[]): java.util.Map<string,org.joda.time.DateTimeZone>;
					public parseDataFile(param0: java.io.BufferedReader, param1: boolean): void;
				}
				export module ZoneInfoCompiler {
					export class DateTimeOfYear extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.tz.ZoneInfoCompiler.DateTimeOfYear>;
						public iMonthOfYear: number;
						public iDayOfMonth: number;
						public iDayOfWeek: number;
						public iAdvanceDayOfWeek: boolean;
						public iMillisOfDay: number;
						public iZoneChar: string;
						public addCutover(param0: org.joda.time.tz.DateTimeZoneBuilder, param1: number): void;
						public addRecurring(param0: org.joda.time.tz.DateTimeZoneBuilder, param1: string, param2: number, param3: number, param4: number): void;
						public toString(): string;
					}
					export class Rule extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.tz.ZoneInfoCompiler.Rule>;
						public iName: string;
						public iFromYear: number;
						public iToYear: number;
						public iType: string;
						public iDateTimeOfYear: org.joda.time.tz.ZoneInfoCompiler.DateTimeOfYear;
						public iSaveMillis: number;
						public iLetterS: string;
						public addRecurring(param0: org.joda.time.tz.DateTimeZoneBuilder, param1: number, param2: string): void;
						public toString(): string;
					}
					export class RuleSet extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.tz.ZoneInfoCompiler.RuleSet>;
						public addRecurring(param0: org.joda.time.tz.DateTimeZoneBuilder, param1: number, param2: string): void;
					}
					export class Zone extends java.lang.Object {
						public static class: java.lang.Class<org.joda.time.tz.ZoneInfoCompiler.Zone>;
						public iName: string;
						public iOffsetMillis: number;
						public iRules: string;
						public iFormat: string;
						public iUntilYear: number;
						public iUntilDateTimeOfYear: org.joda.time.tz.ZoneInfoCompiler.DateTimeOfYear;
						public addToBuilder(param0: org.joda.time.tz.DateTimeZoneBuilder, param1: java.util.Map<string,org.joda.time.tz.ZoneInfoCompiler.RuleSet>): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module tz {
				export class ZoneInfoLogger extends java.lang.Object {
					public static class: java.lang.Class<org.joda.time.tz.ZoneInfoLogger>;
					public constructor();
					public static verbose(): boolean;
					public static set(param0: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module joda {
		export module time {
			export module tz {
				export class ZoneInfoProvider extends java.lang.Object implements org.joda.time.tz.Provider {
					public static class: java.lang.Class<org.joda.time.tz.ZoneInfoProvider>;
					public uncaughtException(param0: java.lang.Exception): void;
					public getZone(param0: string): org.joda.time.DateTimeZone;
					public constructor(param0: string);
					public constructor();
					public getAvailableIDs(): java.util.Set<string>;
					public constructor(param0: java.io.File);
					public constructor(param0: string, param1: java.lang.ClassLoader);
				}
			}
		}
	}
}

//Generics information:

