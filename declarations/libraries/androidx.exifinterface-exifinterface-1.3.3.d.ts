declare module androidx {
	export module exifinterface {
		export module media {
			export class ExifInterface extends java.lang.Object {
				public static class: java.lang.Class<androidx.exifinterface.media.ExifInterface>;
				public static TAG_IMAGE_WIDTH: string;
				public static TAG_IMAGE_LENGTH: string;
				public static TAG_BITS_PER_SAMPLE: string;
				public static TAG_COMPRESSION: string;
				public static TAG_PHOTOMETRIC_INTERPRETATION: string;
				public static TAG_ORIENTATION: string;
				public static TAG_SAMPLES_PER_PIXEL: string;
				public static TAG_PLANAR_CONFIGURATION: string;
				public static TAG_Y_CB_CR_SUB_SAMPLING: string;
				public static TAG_Y_CB_CR_POSITIONING: string;
				public static TAG_X_RESOLUTION: string;
				public static TAG_Y_RESOLUTION: string;
				public static TAG_RESOLUTION_UNIT: string;
				public static TAG_STRIP_OFFSETS: string;
				public static TAG_ROWS_PER_STRIP: string;
				public static TAG_STRIP_BYTE_COUNTS: string;
				public static TAG_JPEG_INTERCHANGE_FORMAT: string;
				public static TAG_JPEG_INTERCHANGE_FORMAT_LENGTH: string;
				public static TAG_TRANSFER_FUNCTION: string;
				public static TAG_WHITE_POINT: string;
				public static TAG_PRIMARY_CHROMATICITIES: string;
				public static TAG_Y_CB_CR_COEFFICIENTS: string;
				public static TAG_REFERENCE_BLACK_WHITE: string;
				public static TAG_DATETIME: string;
				public static TAG_IMAGE_DESCRIPTION: string;
				public static TAG_MAKE: string;
				public static TAG_MODEL: string;
				public static TAG_SOFTWARE: string;
				public static TAG_ARTIST: string;
				public static TAG_COPYRIGHT: string;
				public static TAG_EXIF_VERSION: string;
				public static TAG_FLASHPIX_VERSION: string;
				public static TAG_COLOR_SPACE: string;
				public static TAG_GAMMA: string;
				public static TAG_PIXEL_X_DIMENSION: string;
				public static TAG_PIXEL_Y_DIMENSION: string;
				public static TAG_COMPONENTS_CONFIGURATION: string;
				public static TAG_COMPRESSED_BITS_PER_PIXEL: string;
				public static TAG_MAKER_NOTE: string;
				public static TAG_USER_COMMENT: string;
				public static TAG_RELATED_SOUND_FILE: string;
				public static TAG_DATETIME_ORIGINAL: string;
				public static TAG_DATETIME_DIGITIZED: string;
				public static TAG_OFFSET_TIME: string;
				public static TAG_OFFSET_TIME_ORIGINAL: string;
				public static TAG_OFFSET_TIME_DIGITIZED: string;
				public static TAG_SUBSEC_TIME: string;
				public static TAG_SUBSEC_TIME_ORIGINAL: string;
				public static TAG_SUBSEC_TIME_DIGITIZED: string;
				public static TAG_EXPOSURE_TIME: string;
				public static TAG_F_NUMBER: string;
				public static TAG_EXPOSURE_PROGRAM: string;
				public static TAG_SPECTRAL_SENSITIVITY: string;
				public static TAG_ISO_SPEED_RATINGS: string;
				public static TAG_PHOTOGRAPHIC_SENSITIVITY: string;
				public static TAG_OECF: string;
				public static TAG_SENSITIVITY_TYPE: string;
				public static TAG_STANDARD_OUTPUT_SENSITIVITY: string;
				public static TAG_RECOMMENDED_EXPOSURE_INDEX: string;
				public static TAG_ISO_SPEED: string;
				public static TAG_ISO_SPEED_LATITUDE_YYY: string;
				public static TAG_ISO_SPEED_LATITUDE_ZZZ: string;
				public static TAG_SHUTTER_SPEED_VALUE: string;
				public static TAG_APERTURE_VALUE: string;
				public static TAG_BRIGHTNESS_VALUE: string;
				public static TAG_EXPOSURE_BIAS_VALUE: string;
				public static TAG_MAX_APERTURE_VALUE: string;
				public static TAG_SUBJECT_DISTANCE: string;
				public static TAG_METERING_MODE: string;
				public static TAG_LIGHT_SOURCE: string;
				public static TAG_FLASH: string;
				public static TAG_SUBJECT_AREA: string;
				public static TAG_FOCAL_LENGTH: string;
				public static TAG_FLASH_ENERGY: string;
				public static TAG_SPATIAL_FREQUENCY_RESPONSE: string;
				public static TAG_FOCAL_PLANE_X_RESOLUTION: string;
				public static TAG_FOCAL_PLANE_Y_RESOLUTION: string;
				public static TAG_FOCAL_PLANE_RESOLUTION_UNIT: string;
				public static TAG_SUBJECT_LOCATION: string;
				public static TAG_EXPOSURE_INDEX: string;
				public static TAG_SENSING_METHOD: string;
				public static TAG_FILE_SOURCE: string;
				public static TAG_SCENE_TYPE: string;
				public static TAG_CFA_PATTERN: string;
				public static TAG_CUSTOM_RENDERED: string;
				public static TAG_EXPOSURE_MODE: string;
				public static TAG_WHITE_BALANCE: string;
				public static TAG_DIGITAL_ZOOM_RATIO: string;
				public static TAG_FOCAL_LENGTH_IN_35MM_FILM: string;
				public static TAG_SCENE_CAPTURE_TYPE: string;
				public static TAG_GAIN_CONTROL: string;
				public static TAG_CONTRAST: string;
				public static TAG_SATURATION: string;
				public static TAG_SHARPNESS: string;
				public static TAG_DEVICE_SETTING_DESCRIPTION: string;
				public static TAG_SUBJECT_DISTANCE_RANGE: string;
				public static TAG_IMAGE_UNIQUE_ID: string;
				public static TAG_CAMARA_OWNER_NAME: string;
				public static TAG_CAMERA_OWNER_NAME: string;
				public static TAG_BODY_SERIAL_NUMBER: string;
				public static TAG_LENS_SPECIFICATION: string;
				public static TAG_LENS_MAKE: string;
				public static TAG_LENS_MODEL: string;
				public static TAG_LENS_SERIAL_NUMBER: string;
				public static TAG_GPS_VERSION_ID: string;
				public static TAG_GPS_LATITUDE_REF: string;
				public static TAG_GPS_LATITUDE: string;
				public static TAG_GPS_LONGITUDE_REF: string;
				public static TAG_GPS_LONGITUDE: string;
				public static TAG_GPS_ALTITUDE_REF: string;
				public static TAG_GPS_ALTITUDE: string;
				public static TAG_GPS_TIMESTAMP: string;
				public static TAG_GPS_SATELLITES: string;
				public static TAG_GPS_STATUS: string;
				public static TAG_GPS_MEASURE_MODE: string;
				public static TAG_GPS_DOP: string;
				public static TAG_GPS_SPEED_REF: string;
				public static TAG_GPS_SPEED: string;
				public static TAG_GPS_TRACK_REF: string;
				public static TAG_GPS_TRACK: string;
				public static TAG_GPS_IMG_DIRECTION_REF: string;
				public static TAG_GPS_IMG_DIRECTION: string;
				public static TAG_GPS_MAP_DATUM: string;
				public static TAG_GPS_DEST_LATITUDE_REF: string;
				public static TAG_GPS_DEST_LATITUDE: string;
				public static TAG_GPS_DEST_LONGITUDE_REF: string;
				public static TAG_GPS_DEST_LONGITUDE: string;
				public static TAG_GPS_DEST_BEARING_REF: string;
				public static TAG_GPS_DEST_BEARING: string;
				public static TAG_GPS_DEST_DISTANCE_REF: string;
				public static TAG_GPS_DEST_DISTANCE: string;
				public static TAG_GPS_PROCESSING_METHOD: string;
				public static TAG_GPS_AREA_INFORMATION: string;
				public static TAG_GPS_DATESTAMP: string;
				public static TAG_GPS_DIFFERENTIAL: string;
				public static TAG_GPS_H_POSITIONING_ERROR: string;
				public static TAG_INTEROPERABILITY_INDEX: string;
				public static TAG_THUMBNAIL_IMAGE_LENGTH: string;
				public static TAG_THUMBNAIL_IMAGE_WIDTH: string;
				public static TAG_THUMBNAIL_ORIENTATION: string;
				public static TAG_DNG_VERSION: string;
				public static TAG_DEFAULT_CROP_SIZE: string;
				public static TAG_ORF_THUMBNAIL_IMAGE: string;
				public static TAG_ORF_PREVIEW_IMAGE_START: string;
				public static TAG_ORF_PREVIEW_IMAGE_LENGTH: string;
				public static TAG_ORF_ASPECT_FRAME: string;
				public static TAG_RW2_SENSOR_BOTTOM_BORDER: string;
				public static TAG_RW2_SENSOR_LEFT_BORDER: string;
				public static TAG_RW2_SENSOR_RIGHT_BORDER: string;
				public static TAG_RW2_SENSOR_TOP_BORDER: string;
				public static TAG_RW2_ISO: string;
				public static TAG_RW2_JPG_FROM_RAW: string;
				public static TAG_XMP: string;
				public static TAG_NEW_SUBFILE_TYPE: string;
				public static TAG_SUBFILE_TYPE: string;
				public static ORIENTATION_UNDEFINED: number;
				public static ORIENTATION_NORMAL: number;
				public static ORIENTATION_FLIP_HORIZONTAL: number;
				public static ORIENTATION_ROTATE_180: number;
				public static ORIENTATION_FLIP_VERTICAL: number;
				public static ORIENTATION_TRANSPOSE: number;
				public static ORIENTATION_ROTATE_90: number;
				public static ORIENTATION_TRANSVERSE: number;
				public static ORIENTATION_ROTATE_270: number;
				public static FORMAT_CHUNKY: number;
				public static FORMAT_PLANAR: number;
				public static Y_CB_CR_POSITIONING_CENTERED: number;
				public static Y_CB_CR_POSITIONING_CO_SITED: number;
				public static RESOLUTION_UNIT_INCHES: number;
				public static RESOLUTION_UNIT_CENTIMETERS: number;
				public static COLOR_SPACE_S_RGB: number;
				public static COLOR_SPACE_UNCALIBRATED: number;
				public static EXPOSURE_PROGRAM_NOT_DEFINED: number;
				public static EXPOSURE_PROGRAM_MANUAL: number;
				public static EXPOSURE_PROGRAM_NORMAL: number;
				public static EXPOSURE_PROGRAM_APERTURE_PRIORITY: number;
				public static EXPOSURE_PROGRAM_SHUTTER_PRIORITY: number;
				public static EXPOSURE_PROGRAM_CREATIVE: number;
				public static EXPOSURE_PROGRAM_ACTION: number;
				public static EXPOSURE_PROGRAM_PORTRAIT_MODE: number;
				public static EXPOSURE_PROGRAM_LANDSCAPE_MODE: number;
				public static SENSITIVITY_TYPE_UNKNOWN: number;
				public static SENSITIVITY_TYPE_SOS: number;
				public static SENSITIVITY_TYPE_REI: number;
				public static SENSITIVITY_TYPE_ISO_SPEED: number;
				public static SENSITIVITY_TYPE_SOS_AND_REI: number;
				public static SENSITIVITY_TYPE_SOS_AND_ISO: number;
				public static SENSITIVITY_TYPE_REI_AND_ISO: number;
				public static SENSITIVITY_TYPE_SOS_AND_REI_AND_ISO: number;
				public static METERING_MODE_UNKNOWN: number;
				public static METERING_MODE_AVERAGE: number;
				public static METERING_MODE_CENTER_WEIGHT_AVERAGE: number;
				public static METERING_MODE_SPOT: number;
				public static METERING_MODE_MULTI_SPOT: number;
				public static METERING_MODE_PATTERN: number;
				public static METERING_MODE_PARTIAL: number;
				public static METERING_MODE_OTHER: number;
				public static LIGHT_SOURCE_UNKNOWN: number;
				public static LIGHT_SOURCE_DAYLIGHT: number;
				public static LIGHT_SOURCE_FLUORESCENT: number;
				public static LIGHT_SOURCE_TUNGSTEN: number;
				public static LIGHT_SOURCE_FLASH: number;
				public static LIGHT_SOURCE_FINE_WEATHER: number;
				public static LIGHT_SOURCE_CLOUDY_WEATHER: number;
				public static LIGHT_SOURCE_SHADE: number;
				public static LIGHT_SOURCE_DAYLIGHT_FLUORESCENT: number;
				public static LIGHT_SOURCE_DAY_WHITE_FLUORESCENT: number;
				public static LIGHT_SOURCE_COOL_WHITE_FLUORESCENT: number;
				public static LIGHT_SOURCE_WHITE_FLUORESCENT: number;
				public static LIGHT_SOURCE_WARM_WHITE_FLUORESCENT: number;
				public static LIGHT_SOURCE_STANDARD_LIGHT_A: number;
				public static LIGHT_SOURCE_STANDARD_LIGHT_B: number;
				public static LIGHT_SOURCE_STANDARD_LIGHT_C: number;
				public static LIGHT_SOURCE_D55: number;
				public static LIGHT_SOURCE_D65: number;
				public static LIGHT_SOURCE_D75: number;
				public static LIGHT_SOURCE_D50: number;
				public static LIGHT_SOURCE_ISO_STUDIO_TUNGSTEN: number;
				public static LIGHT_SOURCE_OTHER: number;
				public static FLAG_FLASH_FIRED: number;
				public static FLAG_FLASH_RETURN_LIGHT_NOT_DETECTED: number;
				public static FLAG_FLASH_RETURN_LIGHT_DETECTED: number;
				public static FLAG_FLASH_MODE_COMPULSORY_FIRING: number;
				public static FLAG_FLASH_MODE_COMPULSORY_SUPPRESSION: number;
				public static FLAG_FLASH_MODE_AUTO: number;
				public static FLAG_FLASH_NO_FLASH_FUNCTION: number;
				public static FLAG_FLASH_RED_EYE_SUPPORTED: number;
				public static SENSOR_TYPE_NOT_DEFINED: number;
				public static SENSOR_TYPE_ONE_CHIP: number;
				public static SENSOR_TYPE_TWO_CHIP: number;
				public static SENSOR_TYPE_THREE_CHIP: number;
				public static SENSOR_TYPE_COLOR_SEQUENTIAL: number;
				public static SENSOR_TYPE_TRILINEAR: number;
				public static SENSOR_TYPE_COLOR_SEQUENTIAL_LINEAR: number;
				public static FILE_SOURCE_OTHER: number;
				public static FILE_SOURCE_TRANSPARENT_SCANNER: number;
				public static FILE_SOURCE_REFLEX_SCANNER: number;
				public static FILE_SOURCE_DSC: number;
				public static SCENE_TYPE_DIRECTLY_PHOTOGRAPHED: number;
				public static RENDERED_PROCESS_NORMAL: number;
				public static RENDERED_PROCESS_CUSTOM: number;
				public static EXPOSURE_MODE_AUTO: number;
				public static EXPOSURE_MODE_MANUAL: number;
				public static EXPOSURE_MODE_AUTO_BRACKET: number;
				public static WHITEBALANCE_AUTO: number;
				public static WHITEBALANCE_MANUAL: number;
				public static WHITE_BALANCE_AUTO: number;
				public static WHITE_BALANCE_MANUAL: number;
				public static SCENE_CAPTURE_TYPE_STANDARD: number;
				public static SCENE_CAPTURE_TYPE_LANDSCAPE: number;
				public static SCENE_CAPTURE_TYPE_PORTRAIT: number;
				public static SCENE_CAPTURE_TYPE_NIGHT: number;
				public static GAIN_CONTROL_NONE: number;
				public static GAIN_CONTROL_LOW_GAIN_UP: number;
				public static GAIN_CONTROL_HIGH_GAIN_UP: number;
				public static GAIN_CONTROL_LOW_GAIN_DOWN: number;
				public static GAIN_CONTROL_HIGH_GAIN_DOWN: number;
				public static CONTRAST_NORMAL: number;
				public static CONTRAST_SOFT: number;
				public static CONTRAST_HARD: number;
				public static SATURATION_NORMAL: number;
				public static SATURATION_LOW: number;
				public static SATURATION_HIGH: number;
				public static SHARPNESS_NORMAL: number;
				public static SHARPNESS_SOFT: number;
				public static SHARPNESS_HARD: number;
				public static SUBJECT_DISTANCE_RANGE_UNKNOWN: number;
				public static SUBJECT_DISTANCE_RANGE_MACRO: number;
				public static SUBJECT_DISTANCE_RANGE_CLOSE_VIEW: number;
				public static SUBJECT_DISTANCE_RANGE_DISTANT_VIEW: number;
				public static LATITUDE_NORTH: string;
				public static LATITUDE_SOUTH: string;
				public static LONGITUDE_EAST: string;
				public static LONGITUDE_WEST: string;
				public static ALTITUDE_ABOVE_SEA_LEVEL: number;
				public static ALTITUDE_BELOW_SEA_LEVEL: number;
				public static GPS_MEASUREMENT_IN_PROGRESS: string;
				public static GPS_MEASUREMENT_INTERRUPTED: string;
				public static GPS_MEASUREMENT_2D: string;
				public static GPS_MEASUREMENT_3D: string;
				public static GPS_SPEED_KILOMETERS_PER_HOUR: string;
				public static GPS_SPEED_MILES_PER_HOUR: string;
				public static GPS_SPEED_KNOTS: string;
				public static GPS_DIRECTION_TRUE: string;
				public static GPS_DIRECTION_MAGNETIC: string;
				public static GPS_DISTANCE_KILOMETERS: string;
				public static GPS_DISTANCE_MILES: string;
				public static GPS_DISTANCE_NAUTICAL_MILES: string;
				public static GPS_MEASUREMENT_NO_DIFFERENTIAL: number;
				public static GPS_MEASUREMENT_DIFFERENTIAL_CORRECTED: number;
				public static DATA_UNCOMPRESSED: number;
				public static DATA_HUFFMAN_COMPRESSED: number;
				public static DATA_JPEG: number;
				public static DATA_JPEG_COMPRESSED: number;
				public static DATA_DEFLATE_ZIP: number;
				public static DATA_PACK_BITS_COMPRESSED: number;
				public static DATA_LOSSY_JPEG: number;
				public static BITS_PER_SAMPLE_RGB: number[];
				public static BITS_PER_SAMPLE_GREYSCALE_1: number[];
				public static BITS_PER_SAMPLE_GREYSCALE_2: number[];
				public static PHOTOMETRIC_INTERPRETATION_WHITE_IS_ZERO: number;
				public static PHOTOMETRIC_INTERPRETATION_BLACK_IS_ZERO: number;
				public static PHOTOMETRIC_INTERPRETATION_RGB: number;
				public static PHOTOMETRIC_INTERPRETATION_YCBCR: number;
				public static ORIGINAL_RESOLUTION_IMAGE: number;
				public static REDUCED_RESOLUTION_IMAGE: number;
				public static STREAM_TYPE_FULL_IMAGE_DATA: number;
				public static STREAM_TYPE_EXIF_DATA_ONLY: number;
				public getLatLong(): number[];
				public resetOrientation(): void;
				public hasThumbnail(): boolean;
				public getGpsDateTime(): java.lang.Long;
				public getAttribute(tag: string): string;
				public getThumbnailBytes(): number[];
				public constructor(fileDescriptor: java.io.FileDescriptor);
				public getDateTimeDigitized(): java.lang.Long;
				public getAttributeDouble(tag: string, defaultValue: number): number;
				public getAltitude(defaultValue: number): number;
				public setAltitude(altitude: number): void;
				public flipHorizontally(): void;
				public getAttributeRange(tag: string): number[];
				public getThumbnailBitmap(): android.graphics.Bitmap;
				public getAttributeInt(tag: string, defaultValue: number): number;
				public getDateTime(): java.lang.Long;
				public rotate(degree: number): void;
				public saveAttributes(): void;
				public constructor(file: java.io.File);
				public constructor(filename: string);
				public isThumbnailCompressed(): boolean;
				public constructor(inputStream: java.io.InputStream);
				public hasAttribute(tag: string): boolean;
				public getThumbnailRange(): number[];
				public constructor(inputStream: java.io.InputStream, streamType: number);
				public setAttribute(tag: string, value: string): void;
				public getThumbnail(): number[];
				public setDateTime(timeStamp: java.lang.Long): void;
				public setGpsInfo(location: android.location.Location): void;
				public getAttributeBytes(tag: string): number[];
				public setLatLong(latitude: number, param1: number): void;
				public isFlipped(): boolean;
				/** @deprecated */
				public getLatLong(output: number[]): boolean;
				public getDateTimeOriginal(): java.lang.Long;
				public getRotationDegrees(): number;
				public flipVertically(): void;
				public static isSupportedMimeType(mimeType: string): boolean;
			}
			export module ExifInterface {
				export class ByteOrderedDataInputStream extends java.io.InputStream implements java.io.DataInput {
					public static class: java.lang.Class<androidx.exifinterface.media.ExifInterface.ByteOrderedDataInputStream>;
					public readLine(): string;
					public readLong(): number;
					public readShort(): number;
					public readFully(param0: number[], param1: number, param2: number): void;
					public mark(readlimit: number): void;
					public readBoolean(): boolean;
					public close(): void;
					public skipFully(n: number): void;
					public readFloat(): number;
					public readUnsignedByte(): number;
					public readUTF(): string;
					public readFully(param0: number[]): void;
					public position(): number;
					public readInt(): number;
					public skipBytes(param0: number): number;
					public read(): number;
					public skipBytes(n: number): number;
					public reset(): void;
					public read(b: number[], off: number, len: number): number;
					public readFully(buffer: number[], offset: number, length: number): void;
					public setByteOrder(byteOrder: java.nio.ByteOrder): void;
					public readUnsignedShort(): number;
					public readByte(): number;
					public available(): number;
					public readDouble(): number;
					public read(b: number[]): number;
					public readChar(): string;
					public readFully(buffer: number[]): void;
					public readUnsignedInt(): number;
				}
				export class ByteOrderedDataOutputStream extends java.io.FilterOutputStream {
					public static class: java.lang.Class<androidx.exifinterface.media.ExifInterface.ByteOrderedDataOutputStream>;
					public writeUnsignedShort(val: number): void;
					public writeShort(val: number): void;
					public constructor(out: java.io.OutputStream, byteOrder: java.nio.ByteOrder);
					public write(b: number[]): void;
					public setByteOrder(byteOrder: java.nio.ByteOrder): void;
					public write(bytes: number[]): void;
					public flush(): void;
					public writeUnsignedInt(val: number): void;
					public writeInt(val: number): void;
					public constructor();
					public write(b: number): void;
					public write(bytes: number[], offset: number, length: number): void;
					public writeByte(val: number): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public constructor(out: java.io.OutputStream);
				}
				export class ExifAttribute extends java.lang.Object {
					public static class: java.lang.Class<androidx.exifinterface.media.ExifInterface.ExifAttribute>;
					public static BYTES_OFFSET_UNKNOWN: number;
					public format: number;
					public numberOfComponents: number;
					public bytesOffset: number;
					public bytes: number[];
					public static createSRational(values: androidx.exifinterface.media.ExifInterface.Rational[], byteOrder: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public getDoubleValue(byteOrder: java.nio.ByteOrder): number;
					public static createSRational(value: androidx.exifinterface.media.ExifInterface.Rational, byteOrder: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public static createURational(values: androidx.exifinterface.media.ExifInterface.Rational[], byteOrder: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public static createByte(value: string): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public static createSLong(values: number[], byteOrder: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public getIntValue(byteOrder: java.nio.ByteOrder): number;
					public static createString(value: string): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public size(): number;
					public static createUShort(value: number, byteOrder: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public static createSLong(value: number, byteOrder: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public static createDouble(value: number, param1: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public getStringValue(byteOrder: java.nio.ByteOrder): string;
					public toString(): string;
					public static createUShort(values: number[], byteOrder: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public static createULong(value: number, param1: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public static createDouble(values: number[], byteOrder: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public static createULong(values: number[], byteOrder: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
					public static createURational(value: androidx.exifinterface.media.ExifInterface.Rational, byteOrder: java.nio.ByteOrder): androidx.exifinterface.media.ExifInterface.ExifAttribute;
				}
				export class ExifStreamType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.exifinterface.media.ExifInterface.ExifStreamType>;
					/**
					 * Constructs a new instance of the androidx.exifinterface.media.ExifInterface$ExifStreamType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class ExifTag extends java.lang.Object {
					public static class: java.lang.Class<androidx.exifinterface.media.ExifInterface.ExifTag>;
					public number: number;
					public name: string;
					public primaryFormat: number;
					public secondaryFormat: number;
				}
				export class IfdType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.exifinterface.media.ExifInterface.IfdType>;
					/**
					 * Constructs a new instance of the androidx.exifinterface.media.ExifInterface$IfdType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class Rational extends java.lang.Object {
					public static class: java.lang.Class<androidx.exifinterface.media.ExifInterface.Rational>;
					public numerator: number;
					public denominator: number;
					public toString(): string;
					public calculate(): number;
				}
				export class SeekableByteOrderedDataInputStream extends androidx.exifinterface.media.ExifInterface.ByteOrderedDataInputStream {
					public static class: java.lang.Class<androidx.exifinterface.media.ExifInterface.SeekableByteOrderedDataInputStream>;
					public readLine(): string;
					public skipBytes(n: number): number;
					public seek(position: number): void;
					public readFully(buffer: number[], offset: number, length: number): void;
					public readLong(): number;
					public readUnsignedShort(): number;
					public readByte(): number;
					public readFully(param0: number[], param1: number, param2: number): void;
					public readShort(): number;
					public readBoolean(): boolean;
					public readDouble(): number;
					public close(): void;
					public readFloat(): number;
					public readFully(param0: number[]): void;
					public readUnsignedByte(): number;
					public readChar(): string;
					public readUTF(): string;
					public readInt(): number;
					public readFully(buffer: number[]): void;
					public skipBytes(param0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module exifinterface {
		export module media {
			export class ExifInterfaceUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.exifinterface.media.ExifInterfaceUtils>;
			}
			export module ExifInterfaceUtils {
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.exifinterface.media.ExifInterfaceUtils.Api21Impl>;
				}
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.exifinterface.media.ExifInterfaceUtils.Api23Impl>;
				}
			}
		}
	}
}

//Generics information:

