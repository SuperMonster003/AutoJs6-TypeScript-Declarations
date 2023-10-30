declare module com {
	export module google {
		export module mlkit {
			export module vision {
				export module barcode {
					export module common {
						export class Barcode extends java.lang.Object {
							public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode>;
							public static FORMAT_UNKNOWN: number;
							public static FORMAT_ALL_FORMATS: number;
							public static FORMAT_CODE_128: number;
							public static FORMAT_CODE_39: number;
							public static FORMAT_CODE_93: number;
							public static FORMAT_CODABAR: number;
							public static FORMAT_DATA_MATRIX: number;
							public static FORMAT_EAN_13: number;
							public static FORMAT_EAN_8: number;
							public static FORMAT_ITF: number;
							public static FORMAT_QR_CODE: number;
							public static FORMAT_UPC_A: number;
							public static FORMAT_UPC_E: number;
							public static FORMAT_PDF417: number;
							public static FORMAT_AZTEC: number;
							public static TYPE_UNKNOWN: number;
							public static TYPE_CONTACT_INFO: number;
							public static TYPE_EMAIL: number;
							public static TYPE_ISBN: number;
							public static TYPE_PHONE: number;
							public static TYPE_PRODUCT: number;
							public static TYPE_SMS: number;
							public static TYPE_TEXT: number;
							public static TYPE_URL: number;
							public static TYPE_WIFI: number;
							public static TYPE_GEO: number;
							public static TYPE_CALENDAR_EVENT: number;
							public static TYPE_DRIVER_LICENSE: number;
							public getCalendarEvent(): com.google.mlkit.vision.barcode.common.Barcode.CalendarEvent;
							public getBoundingBox(): android.graphics.Rect;
							public getGeoPoint(): com.google.mlkit.vision.barcode.common.Barcode.GeoPoint;
							public getContactInfo(): com.google.mlkit.vision.barcode.common.Barcode.ContactInfo;
							public getValueType(): number;
							public getUrl(): com.google.mlkit.vision.barcode.common.Barcode.UrlBookmark;
							public getDriverLicense(): com.google.mlkit.vision.barcode.common.Barcode.DriverLicense;
							public getFormat(): number;
							public constructor(barcodeSource: com.google.mlkit.vision.barcode.common.internal.BarcodeSource, coordinatesMatrix: android.graphics.Matrix);
							public getCornerPoints(): android.graphics.Point[];
							public getSms(): com.google.mlkit.vision.barcode.common.Barcode.Sms;
							public getPhone(): com.google.mlkit.vision.barcode.common.Barcode.Phone;
							public getRawValue(): string;
							public getRawBytes(): number[];
							public getWifi(): com.google.mlkit.vision.barcode.common.Barcode.WiFi;
							public getDisplayValue(): string;
							public getEmail(): com.google.mlkit.vision.barcode.common.Barcode.Email;
							public constructor(barcodeSource: com.google.mlkit.vision.barcode.common.internal.BarcodeSource);
						}
						export module Barcode {
							export class Address extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.Address>;
								public static TYPE_UNKNOWN: number;
								public static TYPE_WORK: number;
								public static TYPE_HOME: number;
								public getType(): number;
								public getAddressLines(): string[];
								public constructor(type: number, addressLines: string[]);
							}
							export module Address {
								export class AddressType extends java.lang.Object implements java.lang.annotation.Annotation {
									public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.Address.AddressType>;
									/**
									 * Constructs a new instance of the com.google.mlkit.vision.barcode.common.Barcode$Address$AddressType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										equals(param0: any): boolean;
										hashCode(): number;
										toString(): string;
										annotationType(): java.lang.Class<any>;
									});
									public constructor();
									public hashCode(): number;
									public equals(param0: any): boolean;
									public annotationType(): java.lang.Class<any>;
									public equals(obj: any): boolean;
									public toString(): string;
								}
							}
							export class BarcodeFormat extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.BarcodeFormat>;
								/**
								 * Constructs a new instance of the com.google.mlkit.vision.barcode.common.Barcode$BarcodeFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(param0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public equals(param0: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
							export class BarcodeValueType extends java.lang.Object implements java.lang.annotation.Annotation {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.BarcodeValueType>;
								/**
								 * Constructs a new instance of the com.google.mlkit.vision.barcode.common.Barcode$BarcodeValueType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(param0: any): boolean;
									hashCode(): number;
									toString(): string;
									annotationType(): java.lang.Class<any>;
								});
								public constructor();
								public toString(): string;
								public equals(obj: any): boolean;
								public equals(param0: any): boolean;
								public annotationType(): java.lang.Class<any>;
								public hashCode(): number;
							}
							export class CalendarDateTime extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.CalendarDateTime>;
								public getDay(): number;
								public getRawValue(): string;
								public isUtc(): boolean;
								public getHours(): number;
								public getMinutes(): number;
								public getYear(): number;
								public getSeconds(): number;
								public constructor(year: number, month: number, day: number, hours: number, minutes: number, seconds: number, isUtc: boolean, rawValue: string);
								public getMonth(): number;
							}
							export class CalendarEvent extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.CalendarEvent>;
								public getSummary(): string;
								public getOrganizer(): string;
								public getDescription(): string;
								public getStatus(): string;
								public getEnd(): com.google.mlkit.vision.barcode.common.Barcode.CalendarDateTime;
								public getStart(): com.google.mlkit.vision.barcode.common.Barcode.CalendarDateTime;
								public getLocation(): string;
								public constructor(summary: string, description: string, location: string, organizer: string, status: string, start: com.google.mlkit.vision.barcode.common.Barcode.CalendarDateTime, end: com.google.mlkit.vision.barcode.common.Barcode.CalendarDateTime);
							}
							export class ContactInfo extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.ContactInfo>;
								public getUrls(): java.util.List<string>;
								public getOrganization(): string;
								public getTitle(): string;
								public getAddresses(): java.util.List<com.google.mlkit.vision.barcode.common.Barcode.Address>;
								public getPhones(): java.util.List<com.google.mlkit.vision.barcode.common.Barcode.Phone>;
								public constructor(name: com.google.mlkit.vision.barcode.common.Barcode.PersonName, organization: string, title: string, phones: java.util.List<com.google.mlkit.vision.barcode.common.Barcode.Phone>, emails: java.util.List<com.google.mlkit.vision.barcode.common.Barcode.Email>, urls: java.util.List<string>, addresses: java.util.List<com.google.mlkit.vision.barcode.common.Barcode.Address>);
								public getName(): com.google.mlkit.vision.barcode.common.Barcode.PersonName;
								public getEmails(): java.util.List<com.google.mlkit.vision.barcode.common.Barcode.Email>;
							}
							export class DriverLicense extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.DriverLicense>;
								public getLicenseNumber(): string;
								public getAddressStreet(): string;
								public getAddressZip(): string;
								public getExpiryDate(): string;
								public getAddressCity(): string;
								public getFirstName(): string;
								public getBirthDate(): string;
								public getIssueDate(): string;
								public getDocumentType(): string;
								public constructor(documentType: string, firstName: string, middleName: string, lastName: string, gender: string, addressStreet: string, addressCity: string, addressState: string, addressZip: string, licenseNumber: string, issueDate: string, expiryDate: string, birthDate: string, issuingCountry: string);
								public getIssuingCountry(): string;
								public getLastName(): string;
								public getMiddleName(): string;
								public getGender(): string;
								public getAddressState(): string;
							}
							export class Email extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.Email>;
								public static TYPE_UNKNOWN: number;
								public static TYPE_WORK: number;
								public static TYPE_HOME: number;
								public getType(): number;
								public getAddress(): string;
								public constructor(type: number, address: string, subject: string, body: string);
								public getBody(): string;
								public getSubject(): string;
							}
							export module Email {
								export class FormatType extends java.lang.Object implements java.lang.annotation.Annotation {
									public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.Email.FormatType>;
									/**
									 * Constructs a new instance of the com.google.mlkit.vision.barcode.common.Barcode$Email$FormatType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										equals(param0: any): boolean;
										hashCode(): number;
										toString(): string;
										annotationType(): java.lang.Class<any>;
									});
									public constructor();
									public hashCode(): number;
									public equals(param0: any): boolean;
									public annotationType(): java.lang.Class<any>;
									public equals(obj: any): boolean;
									public toString(): string;
								}
							}
							export class GeoPoint extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.GeoPoint>;
								public constructor(lat: number, param1: number);
								public getLng(): number;
								public getLat(): number;
							}
							export class PersonName extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.PersonName>;
								public getFormattedName(): string;
								public getSuffix(): string;
								public constructor(formattedName: string, pronunciation: string, prefix: string, first: string, middle: string, last: string, suffix: string);
								public getFirst(): string;
								public getMiddle(): string;
								public getPrefix(): string;
								public getPronunciation(): string;
								public getLast(): string;
							}
							export class Phone extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.Phone>;
								public static TYPE_UNKNOWN: number;
								public static TYPE_WORK: number;
								public static TYPE_HOME: number;
								public static TYPE_FAX: number;
								public static TYPE_MOBILE: number;
								public getType(): number;
								public constructor(number: string, type: number);
								public getNumber(): string;
							}
							export module Phone {
								export class FormatType extends java.lang.Object implements java.lang.annotation.Annotation {
									public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.Phone.FormatType>;
									/**
									 * Constructs a new instance of the com.google.mlkit.vision.barcode.common.Barcode$Phone$FormatType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										equals(param0: any): boolean;
										hashCode(): number;
										toString(): string;
										annotationType(): java.lang.Class<any>;
									});
									public constructor();
									public hashCode(): number;
									public equals(param0: any): boolean;
									public annotationType(): java.lang.Class<any>;
									public equals(obj: any): boolean;
									public toString(): string;
								}
							}
							export class Sms extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.Sms>;
								public getPhoneNumber(): string;
								public getMessage(): string;
								public constructor(message: string, phoneNumber: string);
							}
							export class UrlBookmark extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.UrlBookmark>;
								public getTitle(): string;
								public constructor(title: string, url: string);
								public getUrl(): string;
							}
							export class WiFi extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.WiFi>;
								public static TYPE_OPEN: number;
								public static TYPE_WPA: number;
								public static TYPE_WEP: number;
								public getPassword(): string;
								public getSsid(): string;
								public getEncryptionType(): number;
								public constructor(ssid: string, password: string, encryptionType: number);
							}
							export module WiFi {
								export class EncryptionType extends java.lang.Object implements java.lang.annotation.Annotation {
									public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.Barcode.WiFi.EncryptionType>;
									/**
									 * Constructs a new instance of the com.google.mlkit.vision.barcode.common.Barcode$WiFi$EncryptionType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										equals(param0: any): boolean;
										hashCode(): number;
										toString(): string;
										annotationType(): java.lang.Class<any>;
									});
									public constructor();
									public hashCode(): number;
									public equals(param0: any): boolean;
									public annotationType(): java.lang.Class<any>;
									public equals(obj: any): boolean;
									public toString(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module mlkit {
			export module vision {
				export module barcode {
					export module common {
						export module internal {
							export class BarcodeSource extends java.lang.Object {
								public static class: java.lang.Class<com.google.mlkit.vision.barcode.common.internal.BarcodeSource>;
								/**
								 * Constructs a new instance of the com.google.mlkit.vision.barcode.common.internal.BarcodeSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getFormat(): number;
									getValueType(): number;
									getBoundingBox(): android.graphics.Rect;
									getCalendarEvent(): com.google.mlkit.vision.barcode.common.Barcode.CalendarEvent;
									getContactInfo(): com.google.mlkit.vision.barcode.common.Barcode.ContactInfo;
									getDriverLicense(): com.google.mlkit.vision.barcode.common.Barcode.DriverLicense;
									getEmail(): com.google.mlkit.vision.barcode.common.Barcode.Email;
									getGeoPoint(): com.google.mlkit.vision.barcode.common.Barcode.GeoPoint;
									getPhone(): com.google.mlkit.vision.barcode.common.Barcode.Phone;
									getSms(): com.google.mlkit.vision.barcode.common.Barcode.Sms;
									getUrl(): com.google.mlkit.vision.barcode.common.Barcode.UrlBookmark;
									getWifi(): com.google.mlkit.vision.barcode.common.Barcode.WiFi;
									getDisplayValue(): string;
									getRawValue(): string;
									getRawBytes(): number[];
									getCornerPoints(): android.graphics.Point[];
								});
								public constructor();
								public getDisplayValue(): string;
								public getDriverLicense(): com.google.mlkit.vision.barcode.common.Barcode.DriverLicense;
								public getUrl(): com.google.mlkit.vision.barcode.common.Barcode.UrlBookmark;
								public getCalendarEvent(): com.google.mlkit.vision.barcode.common.Barcode.CalendarEvent;
								public getWifi(): com.google.mlkit.vision.barcode.common.Barcode.WiFi;
								public getValueType(): number;
								public getPhone(): com.google.mlkit.vision.barcode.common.Barcode.Phone;
								public getContactInfo(): com.google.mlkit.vision.barcode.common.Barcode.ContactInfo;
								public getFormat(): number;
								public getBoundingBox(): android.graphics.Rect;
								public getRawValue(): string;
								public getCornerPoints(): android.graphics.Point[];
								public getRawBytes(): number[];
								public getSms(): com.google.mlkit.vision.barcode.common.Barcode.Sms;
								public getEmail(): com.google.mlkit.vision.barcode.common.Barcode.Email;
								public getGeoPoint(): com.google.mlkit.vision.barcode.common.Barcode.GeoPoint;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:

