/* tslint:disable */
/* eslint-disable */

/*
* ---------------------------------------------------------------
* ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
* ##                                                           ##
* ## AUTHOR: acacode                                           ##
* ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
* ---------------------------------------------------------------
*/


export interface DoctorAffiliationViewModel {
  hospitalId?: number;
  hospitalName?: string;
  doctorId?: number;
  doctorName?: string;
}

export interface ManagerAffiliationViewModel {
  hospitalId?: number;
  hospitalName?: string;
  managerId?: number;
  managerName?: string;
}

export enum ArticleStatus {
  Draft = "Draft",
  Active = "Active",
  Archived = "Archived" 
 }

export interface Tag {
  id?: number;
  value?: string;
  order?: number;
}

export enum MediaType {
  Photo = "Photo",
  Video = "Video",
  Youtube = "Youtube",
  Document = "Document" 
 }

export interface MediaViewModel {
  id?: number;
  mediaType?: MediaType;
  url?: string;
  thumbnailUrl?: string;
  description?: string;
  order?: number;
}

export interface CreateArticleCommand {
  title?: string;
  description?: string;
  body?: string;
  status?: ArticleStatus;
  hospitalId?: number;
  tags?: Tag[];
  medias?: MediaViewModel[];
}

export interface AuditableEntity {
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
  createdDate?: string;
  updatedDate?: string;
  deletedDate?: string;
  isHidden?: boolean;
  isDeleted?: boolean;
}

export interface ArticleViewModel {
  id?: number;
  title?: string;
  description?: string;
  body?: string;
  status?: ArticleStatus;
  userId?: number;
  authorName?: string;
  hospitalId?: number;
  tags?: Tag[];
  medias?: MediaViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface UpdateArticleCommand {
  title?: string;
  description?: string;
  body?: string;
  status?: ArticleStatus;
  tags?: Tag[];
  medias?: MediaViewModel[];
}

export interface ArticleItemViewModel {
  id?: number;
  title?: string;
  description?: string;
  body?: string;
  status?: ArticleStatus;
  userId?: number;
  authorName?: string;
  hospitalId?: number;
  tags?: Tag[];
  medias?: MediaViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface PagedListMetaData {
  pageCount?: number;
  totalItemCount?: number;
  pageNumber?: number;
  pageSize?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  firstItemOnPage?: number;
  lastItemOnPage?: number;
}

export interface ArticlesViewModel {
  items?: ArticleItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface CreateBookingCommand {
  packageId?: number;
  approximateDateStart?: string;
  approximateDateEnd?: string;
}

export enum BookingStatus {
  New = "New",
  Rejected = "Rejected",
  Approved = "Approved",
  Paid = "Paid",
  Canceled = "Canceled" 
 }

export interface BookingItemViewModel {
  id?: number;
  patientId?: number;
  packageId?: number;
  managerId?: number;
  fee?: number;
  applicationFee?: number;
  approximateDateStart?: string;
  approximateDateEnd?: string;
  confirmedDateStart?: string;
  confirmedDateEnd?: string;
  bookingStatus?: BookingStatus;
}

export interface BookingsViewModel {
  items?: BookingItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface BookingViewModel {
  id?: number;
  patientId?: number;
  packageId?: number;
  managerId?: number;
  fee?: number;
  applicationFee?: number;
  approximateDateStart?: string;
  approximateDateEnd?: string;
  confirmedDateStart?: string;
  confirmedDateEnd?: string;
  bookingStatus?: BookingStatus;
}

export interface UpdateBookingCommand {
  approximateDateStart?: string;
  approximateDateEnd?: string;
}

export enum Gender {
  NotSpecified = "NotSpecified",
  Male = "Male",
  Female = "Female",
  NonBinary = "NonBinary",
  PreferNotToSay = "PreferNotToSay" 
 }

export enum UserLocationType {
  LivesIn = "LivesIn",
  BirthPlace = "BirthPlace" 
 }

export interface UserLocationViewModel {
  locationType?: UserLocationType;
  latitude?: number;
  longitude?: number;
  country?: string;
  state?: string;
  county?: string;
  city?: string;
  zipCode?: string;
  address?: string;
}

export interface CreateCHAdminCommand {
  firstName?: string;
  lastName?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface UserItemViewModel {
  id?: number;
  firstName?: string;
  lastName?: string;
  fullname?: string;
  email?: string;
  photo?: string;
  gender?: Gender;
  dateOfBirth?: string;
  created?: string;
}

export interface CHAdminsViewModel {
  items?: UserItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface CHAdminViewModel {
  id?: number;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  fullname?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  userType?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface UpdateCHAdminCommand {
  firstName?: string;
  lastName?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
}

export interface CreateCHManagerCommand {
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface CHManagersViewModel {
  items?: UserItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface CHManagerViewModel {
  id?: number;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  fullname?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  userType?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface UpdateCHManagerCommand {
  firstName?: string;
  lastName?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
}

export interface CreateCountryCommand {
  name?: string;
  description?: string;
  medias?: MediaViewModel[];
}

export interface CountryItemViewModel {
  id?: number;
  name?: string;
  description?: string;
  hospitalsCount?: number;
  doctorsCount?: number;
  specialitiesCount?: number;
  medias?: MediaViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface CountriesViewModel {
  items?: CountryItemViewModel[];
  metaData?: PagedListMetaData;
  totalHospitalsCount?: number;
  totalDoctorsCount?: number;
  totalSpecialitiesCount?: number;
}

export interface CountryViewModel {
  id?: number;
  name?: string;
  description?: string;
  hospitalsCount?: number;
  doctorsCount?: number;
  specialitiesCount?: number;
  medias?: MediaViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface UpdateCountryCommand {
  name?: string;
  description?: string;
  medias?: MediaViewModel[];
}

export interface CreateDoctorCommand {
  userName?: string;
  email?: string;
  hospitalId?: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface DoctorsViewModel {
  items?: UserItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface Media {
  id?: number;
  mediaType?: MediaType;
  url?: string;
  thumbnailUrl?: string;
  description?: string;
  height?: number;
  width?: number;
  order?: number;
}

export interface Country {
  id?: number;
  name?: string;
  normalizedName?: string;
  description?: string;
  hospitals?: Hospital[];
  medias?: Media[];
  auditableEntity?: AuditableEntity;
}

export enum Platform {
  Web = "Web",
  iOS = "iOS",
  Android = "Android" 
 }

// export enum Ordinates {
//   None = "None",
//   Spatial1 = "Spatial1",
//   Spatial1 = "Spatial1",
//   Spatial2 = "Spatial2",
//   Spatial2 = "Spatial2",
//   XY = "XY",
//   Z = "Z",
//   Z = "Z",
//   XYZ = "XYZ",
//   Spatial4 = "Spatial4",
//   Spatial5 = "Spatial5",
//   Spatial6 = "Spatial6",
//   Spatial7 = "Spatial7",
//   Spatial8 = "Spatial8",
//   Spatial9 = "Spatial9",
//   Spatial10 = "Spatial10",
//   Spatial11 = "Spatial11",
//   Spatial12 = "Spatial12",
//   Spatial13 = "Spatial13",
//   Spatial14 = "Spatial14",
//   Spatial15 = "Spatial15",
//   Spatial16 = "Spatial16",
//   AllSpatialOrdinates = "AllSpatialOrdinates",
//   M = "M",
//   M = "M",
//   XYM = "XYM",
//   XYZM = "XYZM",
//   Measure2 = "Measure2",
//   Measure3 = "Measure3",
//   Measure4 = "Measure4",
//   Measure5 = "Measure5",
//   Measure6 = "Measure6",
//   Measure7 = "Measure7",
//   Measure8 = "Measure8",
//   Measure9 = "Measure9",
//   Measure10 = "Measure10",
//   Measure11 = "Measure11",
//   Measure12 = "Measure12",
//   Measure13 = "Measure13",
//   Measure14 = "Measure14",
//   Measure15 = "Measure15",
//   Measure16 = "Measure16",
//   AllMeasureOrdinates = "AllMeasureOrdinates",
//   AllOrdinates = "AllOrdinates" 
//  }

// export interface CoordinateSequence {
//   dimension?: number;
//   measures?: number;
//   spatial?: number;
//   ordinates?: Ordinates;
//   hasZ?: boolean;
//   hasM?: boolean;
//   zOrdinateIndex?: number;
//   mOrdinateIndex?: number;
//   count?: number;
// }

export interface Coordinate {
  x?: number;
  y?: number;
  z?: number;
  m?: number;
  coordinateValue?: Coordinate;
}

export enum Dimension {
  Point = "Point",
  Curve = "Curve",
  Surface = "Surface",
  Dontcare = "Dontcare",
  True = "True",
  False = "False" 
 }

export enum OgcGeometryType {
  Point = "Point",
  LineString = "LineString",
  Polygon = "Polygon",
  MultiPoint = "MultiPoint",
  MultiLineString = "MultiLineString",
  MultiPolygon = "MultiPolygon",
  GeometryCollection = "GeometryCollection",
  CircularString = "CircularString",
  CompoundCurve = "CompoundCurve",
  CurvePolygon = "CurvePolygon",
  MultiCurve = "MultiCurve",
  MultiSurface = "MultiSurface",
  Curve = "Curve",
  Surface = "Surface",
  PolyhedralSurface = "PolyhedralSurface",
  TIN = "TIN" 
 }

export enum PrecisionModels {
  Floating = "Floating",
  FloatingSingle = "FloatingSingle",
  Fixed = "Fixed" 
 }

export interface PrecisionModel {
  isFloating?: boolean;
  maximumSignificantDigits?: number;
  scale?: number;
  precisionModelType?: PrecisionModels;
}

// export interface CoordinateSequenceFactory {
//   ordinates?: Ordinates;
// }

// export interface GeometryFactory {
//   precisionModel?: PrecisionModel;
//   coordinateSequenceFactory?: CoordinateSequenceFactory;
//   srid?: number;
// }

export interface Envelope {
  isNull?: boolean;
  width?: number;
  height?: number;
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
  area?: number;
  minExtent?: number;
  maxExtent?: number;
  centre?: Coordinate;
}

// export interface Geometry {
//   factory?: GeometryFactory;
//   userData?: object;
//   srid?: number;
//   geometryType?: string;
//   ogcGeometryType?: OgcGeometryType;
//   precisionModel?: PrecisionModel;
//   coordinate?: Coordinate;
//   coordinates?: Coordinate[];
//   numPoints?: number;
//   numGeometries?: number;
//   isSimple?: boolean;
//   isValid?: boolean;
//   isEmpty?: boolean;
//   area?: number;
//   length?: number;
//   centroid?: Point;
//   interiorPoint?: Point;
//   pointOnSurface?: Point;
//   dimension?: Dimension;
//   boundary?: Geometry;
//   boundaryDimension?: Dimension;
//   envelope?: Geometry;
//   envelopeInternal?: Envelope;
//   isRectangle?: boolean;
// }

// export interface Point {
//   coordinateSequence?: CoordinateSequence;
//   coordinates?: Coordinate[];
//   numPoints?: number;
//   isEmpty?: boolean;
//   dimension?: Dimension;
//   boundaryDimension?: Dimension;
//   x?: number;
//   y?: number;
//   coordinate?: Coordinate;
//   geometryType?: string;
//   ogcGeometryType?: OgcGeometryType;
//   boundary?: Geometry;
//   z?: number;
//   m?: number;
//   factory?: GeometryFactory;
//   userData?: object;
//   srid?: number;
//   precisionModel?: PrecisionModel;
//   numGeometries?: number;
//   isSimple?: boolean;
//   isValid?: boolean;
//   area?: number;
//   length?: number;
//   centroid?: Point;
//   interiorPoint?: Point;
//   pointOnSurface?: Point;
//   envelope?: Geometry;
//   envelopeInternal?: Envelope;
//   isRectangle?: boolean;
// }

// export interface Location {
//   point?: Point;
//   country?: string;
//   state?: string;
//   county?: string;
//   city?: string;
//   zipCode?: string;
//   address?: string;
// }

export interface DeviceLogin {
  id?: number;
  deviceId?: number;
  device?: Device;
  version?: string;
  location?: Location;
  auditableEntity?: AuditableEntity;
}

export interface Device {
  id?: number;
  token?: string;
  platform?: Platform;
  appAlert?: boolean;
  eventAlert?: boolean;
  noticeAlert?: boolean;
  deviceLogins?: DeviceLogin[];
  auditableEntity?: AuditableEntity;
}

// export interface UserLocation {
//   point?: Point;
//   country?: string;
//   state?: string;
//   county?: string;
//   city?: string;
//   zipCode?: string;
//   address?: string;
//   locationType?: UserLocationType;
// }

export interface User {
  id?: number;
  openId?: string;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  normalizedName?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  devices?: Device[];
  articles?: Article[];
  medias?: Media[];
  // locations?: UserLocation[];
  auditableEntity?: AuditableEntity;
}

export interface Article {
  id?: number;
  title?: string;
  normalizedTitle?: string;
  description?: string;
  body?: string;
  status?: ArticleStatus;
  userId?: number;
  user?: User;
  hospitalId?: number;
  hospital?: Hospital;
  tags?: Tag[];
  medias?: Media[];
  auditableEntity?: AuditableEntity;
}

export interface Equipment {
  id?: number;
  name?: string;
  normalizedName?: string;
  description?: string;
  hospitalId?: number;
  hospital?: Hospital;
  medias?: Media[];
  auditableEntity?: AuditableEntity;
}

export enum ReviewCategory {
  Services = "Services",
  Hospitality = "Hospitality",
  Transfer = "Transfer",
  Etc = "Etc" 
 }

export interface HospitalReview {
  id?: number;
  patientId?: number;
  patient?: Patient;
  hospitaltId?: number;
  hospital?: Hospital;
  body?: string;
  recommended?: boolean;
  reviewCategory?: ReviewCategory;
  rate?: number;
}

export interface Department {
  id?: number;
  hospitalId?: number;
  hospital?: Hospital;
  name?: string;
  additionalInfo?: string;
}

export enum SpecialtyType {
  AestheticMedicineAndCosmetology = "AestheticMedicineAndCosmetology",
  Cardiology = "Cardiology",
  Endocrinology = "Endocrinology",
  Gastroenterology = "Gastroenterology",
  HeartSurgery = "HeartSurgery",
  HematologyOncology = "HematologyOncology",
  Immunology = "Immunology",
  Infectiousdiseases = "Infectiousdiseases",
  Mammology = "Mammology",
  Neurology = "Neurology",
  Neurosurgery = "Neurosurgery",
  ObstetricsAndGynecology = "ObstetricsAndGynecology",
  Oncology = "Oncology",
  Ophthalmology = "Ophthalmology",
  Orthopedics = "Orthopedics",
  ENT = "ENT",
  PediatricCardiacSurgery = "PediatricCardiacSurgery",
  PediatricNeurosurgery = "PediatricNeurosurgery",
  PediatricOncology = "PediatricOncology",
  Phlebology = "Phlebology",
  PlasticSurgery = "PlasticSurgery",
  Psychiatry = "Psychiatry",
  Pulmonology = "Pulmonology",
  Rehabilitation = "Rehabilitation",
  Reproductology = "Reproductology",
  Rheumatology = "Rheumatology",
  Surgery = "Surgery",
  Urology = "Urology",
  WeightLossSurgery = "WeightLossSurgery" 
 }

export interface DoctorLanguage {
  id?: number;
  doctorId?: number;
  doctor?: Doctor;
  language?: string;
}

export interface DoctorEducation {
  id?: number;
  doctorId?: number;
  doctor?: Doctor;
  institution?: string;
  qualification?: string;
  graduationDate?: string;
}

export interface DoctorPortfolio {
  id?: number;
  doctorId?: number;
  doctor?: Doctor;
  description?: string;
  photoBefore?: string;
  photoAfter?: string;
}

export interface DoctorCertificate {
  id?: number;
  doctorId?: number;
  doctor?: Doctor;
  certificate?: string;
  activeFrom?: string;
  activeTo?: string;
}

export interface DoctorAffiliation {
  id?: number;
  doctorId?: number;
  doctor?: Doctor;
  hospitalId?: number;
  hospital?: Hospital;
}

export interface Award {
  id?: number;
  name?: string;
  image?: string;
  date?: string;
}

export interface Doctor {
  code?: string;
  startPracticeDate?: string;
  reviews?: DoctorReview[];
  languages?: DoctorLanguage[];
  educations?: DoctorEducation[];
  portfolios?: DoctorPortfolio[];
  specialties?: DoctorSpecialty[];
  certificates?: DoctorCertificate[];
  affiliations?: DoctorAffiliation[];
  awards?: Award[];
  id?: number;
  openId?: string;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  normalizedName?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  devices?: Device[];
  articles?: Article[];
  medias?: Media[];
  // locations?: UserLocation[];
  auditableEntity?: AuditableEntity;
}

export interface DoctorSpecialty {
  id?: number;
  doctorId?: number;
  doctor?: Doctor;
  specialtyId?: number;
  specialty?: Specialty;
  order?: number;
}

export interface Specialty {
  id?: number;
  name?: string;
  normalizedName?: string;
  description?: string;
  specialtyType?: SpecialtyType;
  hospitalSpecialties?: HospitalSpecialty[];
  doctorSpecialties?: DoctorSpecialty[];
  auditableEntity?: AuditableEntity;
}

export enum Procedure {
  Treatment = "Treatment",
  Diagnostic = "Diagnostic" 
 }

export enum AssessmentType {
  Boolean = "Boolean",
  Text = "Text" 
 }

export interface AssessmentAnswer {
  id?: number;
  assessmentId?: number;
  assessment?: Assessment;
  bookingId?: number;
  booking?: Booking;
  textAnswer?: string;
  booleanAnswer?: boolean;
}

export interface Assessment {
  id?: number;
  serviceId?: number;
  service?: Service;
  question?: string;
  answerType?: AssessmentType;
  isRequired?: boolean;
  order?: number;
  assessmentAnswers?: AssessmentAnswer[];
}

export interface Service {
  id?: number;
  name?: string;
  normalizedName?: string;
  description?: string;
  hospitalId?: number;
  specialtyId?: number;
  hospitalSpecialty?: HospitalSpecialty;
  procedure?: Procedure;
  minPrice?: number;
  maxPrice?: number;
  priceReuqest?: boolean;
  order?: number;
  assessments?: Assessment[];
  auditableEntity?: AuditableEntity;
}

export interface HospitalSpecialty {
  hospitalId?: number;
  hospital?: Hospital;
  specialtyId?: number;
  specialty?: Specialty;
  order?: number;
  services?: Service[];
  auditableEntity?: AuditableEntity;
}

export interface Accreditation {
  id?: number;
  name?: string;
  logo?: string;
  country?: string;
  accreditations?: HospitalAccreditation[];
}

export interface HospitalAccreditation {
  hospitalId?: number;
  hospital?: Hospital;
  accreditationId?: number;
  accreditation?: Accreditation;
}

export enum VendorType {
  Stripe = "Stripe",
  WeChat = "WeChat" 
 }

export interface Account {
  id?: string;
  vendor?: VendorType;
  auditableEntity?: AuditableEntity;
}

export interface Manager {
  affiliations?: ManagerAffiliation[];
  accounts?: Account[];
  id?: number;
  openId?: string;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  normalizedName?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  devices?: Device[];
  articles?: Article[];
  medias?: Media[];
  // locations?: UserLocation[];
  auditableEntity?: AuditableEntity;
}

export interface ManagerAffiliation {
  id?: number;
  managerId?: number;
  manager?: Manager;
  hospitalId?: number;
  hospital?: Hospital;
}

export interface Hospital {
  id?: number;
  name?: string;
  normalizedName?: string;
  description?: string;
  logo?: string;
  overview?: string;
  bedsCount?: number;
  operationRoomsCount?: number;
  icuBedsCount?: number;
  departmentsCount?: number;
  medicalStaffCount?: number;
  countryId?: number;
  country?: Country;
  articles?: Article[];
  packages?: Package[];
  equipments?: Equipment[];
  reviews?: HospitalReview[];
  departments?: Department[];
  specialties?: HospitalSpecialty[];
  accreditations?: HospitalAccreditation[];
  doctorAffiliations?: DoctorAffiliation[];
  managerAffiliations?: ManagerAffiliation[];
  awards?: Award[];
  medias?: Media[];
  location?: Location;
  auditableEntity?: AuditableEntity;
}

export enum PackageStatus {
  New = "New",
  Standard = "Standard" 
 }

export interface Package {
  id?: number;
  name?: string;
  hospitalId?: number;
  hospital?: Hospital;
  packageStatus?: PackageStatus;
  accomodation?: string;
  trnasfer?: string;
  bonus?: string;
  packagePrice?: number;
  managers?: Manager[];
  services?: Service[];
  bookings?: Booking[];
  auditableEntity?: AuditableEntity;
}

export enum RejectReason {
  AssessmentNotCompleted = "AssessmentNotCompleted",
  PaymentNotCompleted = "PaymentNotCompleted",
  ScheduleNotAvailable = "ScheduleNotAvailable",
  OtherReason = "OtherReason" 
 }

export interface Customer {
  id?: string;
  vendor?: VendorType;
  patientId?: number;
  patient?: Patient;
  payments?: Payment[];
  auditableEntity?: AuditableEntity;
}

export enum ChargeStatus {
  Pending = "Pending",
  Succeeded = "Succeeded",
  Failed = "Failed" 
 }

export enum RefundStatus {
  Pending = "Pending",
  Succeeded = "Succeeded",
  Failed = "Failed" 
 }

export enum PaymentStatus {
  Unpaid = "Unpaid",
  Paid = "Paid",
  RefundRequested = "RefundRequested",
  Refunded = "Refunded" 
 }

export interface ChangeLog {
  id?: number;
  status?: number;
  actorId?: number;
  createdDate?: string;
}

export interface Payment {
  id?: number;
  patientId?: number;
  patient?: Patient;
  customerId?: string;
  customer?: Customer;
  bookingId?: number;
  booking?: Booking;
  chargeId?: string;
  refundId?: string;
  chargeStatus?: ChargeStatus;
  refundStatus?: RefundStatus;
  paymentStatus?: PaymentStatus;
  currency?: string;
  fee?: number;
  applicationFee?: number;
  cardBrand?: string;
  "cardLast4Digits"?: string;
  paymentStatusChangeLogs?: ChangeLog[];
}

export interface BookingComment {
  id?: number;
  patientId?: number;
  patient?: Patient;
  bookingId?: number;
  booking?: Booking;
  body?: string;
  medias?: Media[];
  auditableEntity?: AuditableEntity;
}

export interface Booking {
  id?: number;
  patientId?: number;
  patient?: Patient;
  packageId?: number;
  package?: Package;
  fee?: number;
  applicationFee?: number;
  approximateDateStart?: string;
  approximateDateEnd?: string;
  confirmedDateStart?: string;
  confirmedDateEnd?: string;
  bookingStatus?: BookingStatus;
  rejectReason?: RejectReason;
  isOpen?: boolean;
  payments?: Payment[];
  bookingComments?: BookingComment[];
  assessmentAnswers?: AssessmentAnswer[];
  bookingStatusChangeLogs?: ChangeLog[];
  auditableEntity?: AuditableEntity;
}

export interface Patient {
  contact?: string;
  contactNumber?: string;
  nationality?: string;
  bookings?: Booking[];
  payments?: Payment[];
  customers?: Customer[];
  doctorReviews?: DoctorReview[];
  hospitalReviews?: HospitalReview[];
  bookingComments?: BookingComment[];
  id?: number;
  openId?: string;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  normalizedName?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  devices?: Device[];
  articles?: Article[];
  medias?: Media[];
  // locations?: UserLocation[];
  auditableEntity?: AuditableEntity;
}

export interface DoctorReview {
  id?: number;
  patientId?: number;
  patient?: Patient;
  doctorId?: number;
  doctor?: Doctor;
  body?: string;
  recommended?: boolean;
  reviewCategory?: ReviewCategory;
  rate?: number;
}

export interface AwardViewModel {
  id?: number;
  name?: string;
  image?: string;
  date?: string;
}

export interface DoctorViewModel {
  code?: string;
  startPracticeDate?: string;
  reviews?: DoctorReview[];
  languages?: DoctorLanguage[];
  educations?: DoctorEducation[];
  portfolios?: DoctorPortfolio[];
  certificates?: DoctorCertificate[];
  awards?: AwardViewModel[];
  specialties?: Specialty[];
  id?: number;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  fullname?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  userType?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface UpdateDoctorCommand {
  firstName?: string;
  lastName?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
}

export interface CreateEquipmentCommand {
  name?: string;
  description?: string;
  medias?: MediaViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface EquipmentViewModel {
  id?: number;
  name?: string;
  description?: string;
  hospitalId?: number;
  hospitalName?: string;
  medias?: MediaViewModel[];
}

export interface UpdateEquipmentCommand {
  name?: string;
  description?: string;
  hospitalName?: string;
  medias?: MediaViewModel[];
}

export interface EquipmentItemViewModel {
  id?: number;
  name?: string;
  description?: string;
  hospitalId?: number;
  hospitalName?: string;
  medias?: MediaViewModel[];
}

export interface EquipmentsViewModel {
  items?: EquipmentItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface LocationViewModel {
  latitude?: number;
  longitude?: number;
  country?: string;
  state?: string;
  county?: string;
  city?: string;
  zipCode?: string;
  address?: string;
}

export interface CreateHospitalCommand {
  name?: string;
  description?: string;
  logo?: string;
  overview?: string;
  bedsCount?: number;
  operationRoomsCount?: number;
  icuBedsCount?: number;
  departmentsCount?: number;
  medicalStaffCount?: number;
  countryId?: number;
  awards?: AwardViewModel[];
  medias?: MediaViewModel[];
  location?: LocationViewModel;
}

export interface HospitalItemViewModel {
  id?: number;
  name?: string;
  description?: string;
  logo?: string;
  overview?: string;
  countryId?: number;
  countryName?: string;
  reviewCount?: number;
  reviewTier?: string;
  reviewRate?: number;
  awards?: AwardViewModel[];
  medias?: MediaViewModel[];
}

export interface HospitalsViewModel {
  items?: HospitalItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface HospitalViewModel {
  id?: number;
  name?: string;
  description?: string;
  logo?: string;
  overview?: string;
  bedsCount?: number;
  operationRoomsCount?: number;
  icuBedsCount?: number;
  departmentsCount?: number;
  medicalStaffCount?: number;
  countryId?: number;
  countryName?: string;
  doctorCount?: number;
  managerCount?: number;
  equipmentCount?: number;
  reviewCount?: number;
  specialtyCount?: number;
  accreditationCount?: number;
  awardCount?: number;
  awards?: AwardViewModel[];
  medias?: MediaViewModel[];
  location?: LocationViewModel;
}

export interface UpdateHospitalCommand {
  name?: string;
  description?: string;
  logo?: string;
  overview?: string;
  bedsCount?: number;
  operationRoomsCount?: number;
  icuBedsCount?: number;
  departmentsCount?: number;
  medicalStaffCount?: number;
  countryName?: string;
  doctorCount?: number;
  managerCount?: number;
  equipmentCount?: number;
  reviewCount?: number;
  specialtyCount?: number;
  accreditationCount?: number;
  awardCount?: number;
  awards?: AwardViewModel[];
  medias?: MediaViewModel[];
  location?: LocationViewModel;
}

export interface HospitalSpecialtyViewModel {
  hospitalId?: number;
  hospitalName?: string;
  specialtyId?: number;
  specialtyName?: string;
  order?: number;
}

export interface UpdateHospitalSpecialtySequenceCommand {
  hospitalSpecialtySequence?: number[];
}

export interface HospitalSpecialtyItemViewModel {
  hospitalId?: number;
  hospitalName?: string;
  specialtyId?: number;
  specialtyName?: string;
  order?: number;
}

export interface HospitalSpecialtiesViewModel {
  items?: HospitalSpecialtyItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface CreateManagerCommand {
  userName?: string;
  email?: string;
  hospitalId?: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface ManagersViewModel {
  items?: UserItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface ManagerViewModel {
  hospitalId?: number;
  hospital?: Hospital;
  id?: number;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  fullname?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  userType?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface UpdateManagerCommand {
  firstName?: string;
  lastName?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
}

export interface CreatePartnerCommand {
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface PartnersViewModel {
  items?: UserItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface PartnerViewModel {
  referralCode?: string;
  referralCount?: number;
  id?: number;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  fullname?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  userType?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface UpdatePartnerCommand {
  firstName?: string;
  lastName?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
}

export interface CreatePatientCommand {
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface PatientsViewModel {
  items?: UserItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface PatientViewModel {
  contact?: string;
  contactNumber?: string;
  nationality?: string;
  id?: number;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  fullname?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  userType?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface UpdatePatientCommand {
  firstName?: string;
  lastName?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  locations?: UserLocationViewModel[];
}

export interface UserViewModel {
  id?: number;
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  fullname?: string;
  phone?: string;
  photo?: string;
  photoThumbnail?: string;
  gender?: Gender;
  dateOfBirth?: string;
  userType?: string;
  locations?: UserLocationViewModel[];
  auditableEntity?: AuditableEntity;
}

export interface ChangeEmailCommand {
  email?: string;
}

export interface CreateServiceCommand {
  name?: string;
  description?: string;
  minPrice?: number;
  maxPrice?: number;
  priceReuqest?: boolean;
  procedure?: Procedure;
}

export interface ServiceViewModel {
  id?: number;
  name?: string;
  description?: string;
  hospitalId?: number;
  specialtyId?: number;
  procedure?: Procedure;
  minPrice?: number;
  maxPrice?: number;
  priceReuqest?: boolean;
  order?: number;
}

export interface UpdateServiceCommand {
  name?: string;
  description?: string;
  procedure?: Procedure;
  minPrice?: number;
  maxPrice?: number;
  priceReuqest?: boolean;
  order?: number;
}

export interface UpdateServiceSequenceCommand {
  serviceSequence?: number[];
}

export interface ServiceItemViewModel {
  id?: number;
  name?: string;
  description?: string;
  hospitalId?: number;
  specialtyId?: number;
  procedure?: Procedure;
  minPrice?: number;
  maxPrice?: number;
  priceReuqest?: boolean;
  order?: number;
}

export interface ServicesViewModel {
  items?: ServiceItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface CreateSpecialtyCommand {
  name?: string;
  description?: string;
}

export interface SpecialtyItemViewModel {
  id?: number;
  name?: string;
  description?: string;
  specialtyType?: SpecialtyType;
}

export interface SpecialtiesViewModel {
  items?: SpecialtyItemViewModel[];
  metaData?: PagedListMetaData;
}

export interface SpecialtyViewModel {
  id?: number;
  name?: string;
  description?: string;
  specialtyType?: SpecialtyType;
}

export interface UpdateSpecialtyCommand {
  name?: string;
  description?: string;
}

export type RequestParams = Omit<RequestInit, "body" | "method"> & {
  secure?: boolean;
}

type ApiConfig<SecurityDataType> = {
  baseUrl?: string,
  baseApiParams?: RequestParams,
  securityWorker?: (securityData: SecurityDataType) => RequestParams,
}


/** Cloud Hospital application with Swagger, Swashbuckle, and API versioning. */
export class Api<SecurityDataType> {
  
  public baseUrl = "";
  public title = "Swagger UI - Cloud Hospital";
  public version = "1";

  private securityData: SecurityDataType = (null as any);
  private securityWorker: ApiConfig<SecurityDataType>["securityWorker"] = (() => {}) as any
  
  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor({ baseUrl,baseApiParams,securityWorker, }: ApiConfig<SecurityDataType> = {}) {
    this.baseUrl = baseUrl || this.baseUrl;
    this.baseApiParams = baseApiParams || this.baseApiParams;
    this.securityWorker = securityWorker || this.securityWorker;
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data
  }

  private addQueryParams(query: Record<string, string|string[]|number|number[]|boolean|undefined>): string {
    const keys = Object.keys(query).filter(key => "undefined" !== typeof query[key])
    return keys.length === 0 ? ''
      : '?' + keys.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(
                Array.isArray(query[key]) ? (query[key] as any).join(',') : query[key])
              ).join('&')
  }

  private mergeRequestOptions(params: RequestParams, securityParams?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params,
      ...(securityParams || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params.headers || {}),
        ...((securityParams && securityParams.headers) || {})
      }
    }
  }
  
  private safeParseResponse = <T = any, E = any>(response: Response): Promise<T> =>
    response.json()
      .then(data => data)
      .catch(e => response.text);
  
  public request = <T = any, E = any>(
    path: string,
    method: string,
    { secure, ...params }: RequestParams = {},
    body?: any,
    secureByDefault?: boolean,
  ): Promise<T> =>
    fetch(`${this.baseUrl}${path}`, {
      // @ts-ignore
      ...this.mergeRequestOptions(params, (secureByDefault || secure) && this.securityWorker(this.securityData)),
      method,
      body: body ? JSON.stringify(body) : null,
    }).then(async response => {
      const data = await this.safeParseResponse<T, E>(response);
      if (!response.ok) throw data
      return data
    })



  api = {


    /**
     * @tags Affiliations
     * @name v1HospitalsDoctorsCreate
     * @summary Link a doctor to a hospital.
     * @request POST:/api/v1/hospitals/{hospitalId}/doctors/{doctorId}
     * @secure
     * @description Sample request: POST /api/v1/hospitals/1/doctors/1
     */
    v1HospitalsDoctorsCreate: (hospitalId: number, doctorId: number, params?: RequestParams) =>
      this.request<DoctorAffiliationViewModel, any>(`/api/v1/hospitals/${hospitalId}/doctors/${doctorId}`, "POST", params, null, true),


    /**
     * @tags Affiliations
     * @name v1HospitalsDoctorsDelete
     * @summary Remove link between the doctor and the hospital.
     * @request DELETE:/api/v1/hospitals/{hospitalId}/doctors/{doctorId}
     * @secure
     * @description Sample request: DELETE /api/v1/hospitals/1/doctors/1
     */
    v1HospitalsDoctorsDelete: (hospitalId: number, doctorId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/doctors/${doctorId}`, "DELETE", params, null, true),


    /**
     * @tags Affiliations
     * @name v1HospitalsManagersCreate
     * @summary Link a manager to a hospital.
     * @request POST:/api/v1/hospitals/{hospitalId}/managers/{managerId}
     * @secure
     * @description Sample request: POST /api/v1/hospitals/1/managers/1
     */
    v1HospitalsManagersCreate: (hospitalId: number, managerId: number, params?: RequestParams) =>
      this.request<ManagerAffiliationViewModel, any>(`/api/v1/hospitals/${hospitalId}/managers/${managerId}`, "POST", params, null, true),


    /**
     * @tags Affiliations
     * @name v1HospitalsManagersDelete
     * @summary Remove link between the manager and the hospital.
     * @request DELETE:/api/v1/hospitals/{hospitalId}/managers/{managerId}
     * @secure
     * @description Sample request: DELETE /api/v1/hospitals/1/managers/1
     */
    v1HospitalsManagersDelete: (hospitalId: number, managerId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/managers/${managerId}`, "DELETE", params, null, true),


    /**
     * @tags Articles
     * @name v1HospitalsArticlesCreate
     * @summary Create an article.
     * @request POST:/api/v1/hospitals/{hospitalId}/articles
     * @secure
     * @description Sample request: POST /api/v1/hospitals/1/articles { "title": "Samsung Hospital Article", "description": "This is an article.", "body": "article body here", "status": "Draft", "hospitalId": 1, "tags": [ { "value": "string", "order": 0 } ], "medias": [ { "mediaType": "Photo", "url": "string", "thumbnailUrl": "string", "description": "string", "order": 0 } ] }
     */
    v1HospitalsArticlesCreate: (hospitalId: string, data: CreateArticleCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/hospitals/${hospitalId}/articles`, "POST", params, data, true),


    /**
     * @tags Articles
     * @name v1HospitalsArticlesDetail
     * @summary Get article.
     * @request GET:/api/v1/hospitals/{hospitalId}/articles/{articleId}
     * @description Sample request: GET /api/v1/hospitals/1/articles/1
     */
    v1HospitalsArticlesDetail: (hospitalId: number, articleId: number, params?: RequestParams) =>
      this.request<ArticleViewModel, any>(`/api/v1/hospitals/${hospitalId}/articles/${articleId}`, "GET", params, null),


    /**
     * @tags Articles
     * @name v1HospitalsArticlesUpdate
     * @summary Update article.
     * @request PUT:/api/v1/hospitals/{hospitalId}/articles/{articleId}
     * @secure
     * @description Sample request: PUT /api/v1/hospitals/1/articles/1 { "title": "Samsung Hospital Article", "description": "This is an article.", "body": "updated article body here", "status": "Draft", "hospitalId": 1, "tags": [ { "value": "articletag1", "order": 0 }, { "value": "articletag2", "order": 0 } ], "medias": [ { "mediaType": "Photo", "url": "string", "thumbnailUrl": "string", "description": "string", "order": 0 } ] }
     */
    v1HospitalsArticlesUpdate: (hospitalId: number, articleId: number, data: UpdateArticleCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/articles/${articleId}`, "PUT", params, data, true),


    /**
     * @tags Articles
     * @name v1HospitalsArticlesDelete
     * @summary Delete article.
     * @request DELETE:/api/v1/hospitals/{hospitalId}/articles/{articleId}
     * @secure
     * @description Sample request: DELETE /api/v1/hospitals/1/articles/1
     */
    v1HospitalsArticlesDelete: (hospitalId: number, articleId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/articles/${articleId}`, "DELETE", params, null, true),


    /**
     * @tags Articles
     * @name v1HospitalsArticlesList
     * @summary Get all articles.
     * @request GET:/api/v1/hospitals/articles
     * @description Sample request: GET /api/v1/hospitals/1/articles
     */
    v1HospitalsArticlesList: (query: { page?: number, limit?: number, lastRetrieved?: string, searchString?: string, hospitalId?: number }, params?: RequestParams) =>
      this.request<ArticlesViewModel, any>(`/api/v1/hospitals/articles${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Bookings
     * @name v1BookingsCreate
     * @summary Create a booking.
     * @request POST:/api/v1/bookings
     * @secure
     * @description Sample request: POST /api/v1/bookings { "packageId": 1, "approximateDateStart": "2020-02-28T06:21:09.698Z", "approximateDateEnd": "2020-02-28T06:21:09.698Z" }
     */
    v1BookingsCreate: (data: CreateBookingCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/bookings`, "POST", params, data, true),


    /**
     * @tags Bookings
     * @name v1BookingsList
     * @summary Get all bookings.
     * @request GET:/api/v1/bookings
     * @secure
     * @description Samaple request: GET /api/v1/bookings
     */
    v1BookingsList: (query: { page?: number, limit?: number, lastRetrieved?: string, searchString?: string, isOpen?: boolean, bookingStatus?: BookingStatus }, params?: RequestParams) =>
      this.request<BookingsViewModel, any>(`/api/v1/bookings${this.addQueryParams(query)}`, "GET", params, null, true),


    /**
     * @tags Bookings
     * @name v1BookingsDetail
     * @summary Get booking.
     * @request GET:/api/v1/bookings/{bookingId}
     * @secure
     * @description Sample request: GET /api/v1/bookings/1
     */
    v1BookingsDetail: (bookingId: number, params?: RequestParams) =>
      this.request<BookingViewModel, any>(`/api/v1/bookings/${bookingId}`, "GET", params, null, true),


    /**
     * @tags Bookings
     * @name v1BookingsUpdate
     * @summary Update booking.
     * @request PUT:/api/v1/bookings/{bookingId}
     * @secure
     * @description Smaple request: PUT /api/v1/bookings/1 { "approximateDateStart": "2020-02-28T06:21:09.698Z", "approximateDateEnd": "2020-02-28T06:21:09.698Z" }
     */
    v1BookingsUpdate: (bookingId: number, data: UpdateBookingCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/bookings/${bookingId}`, "PUT", params, data, true),


    /**
     * @tags Bookings
     * @name v1BookingsDelete
     * @summary Delete booking.
     * @request DELETE:/api/v1/bookings/{bookingId}
     * @secure
     * @description Sample request: DELETE /api/v1/bookings/1
     */
    v1BookingsDelete: (bookingId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/bookings/${bookingId}`, "DELETE", params, null, true),


    /**
     * @tags CHAdmins
     * @name v1ChadminsCreate
     * @summary Create cloud hospital admin user.
     * @request POST:/api/v1/chadmins
     * @secure
     * @description Sample request: POST /api/v1/chadmins { "firstName": "Cloud", "lastName": "Hospital", "photo": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png", "photoThumbnail": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png", "gender": "NotSpecified", "dateOfBirth": "2020-02-22T09:09:19.082Z", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1ChadminsCreate: (data: CreateCHAdminCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/chadmins`, "POST", params, data, true),


    /**
     * @tags CHAdmins
     * @name v1ChadminsList
     * @summary Get cloud hospital admin users.
     * @request GET:/api/v1/chadmins
     * @secure
     * @description Sample request: GET /api/v1/chadmin { "pageQueryFilter": { "page": 1, "limit": 20, "lastRetrived": "2020-02-05T08:40" }, "searchString": "admin" }
     */
    v1ChadminsList: (query: { Id?: number, Fullname?: string, Email?: string, Gender?: Gender, DateOfBirth?: string, Created?: string, page?: number, limit?: number, lastRetrieved?: string, searchString?: string }, params?: RequestParams) =>
      this.request<CHAdminsViewModel, any>(`/api/v1/chadmins${this.addQueryParams(query)}`, "GET", params, null, true),


    /**
     * @tags CHAdmins
     * @name v1ChadminsDetail
     * @summary Get cloud hospital admin user by id.
     * @request GET:/api/v1/chadmins/{chAdminId}
     * @secure
     * @description Sample request: GET /api/v1/chadmins/1
     */
    v1ChadminsDetail: (chAdminId: number, params?: RequestParams) =>
      this.request<CHAdminViewModel, any>(`/api/v1/chadmins/${chAdminId}`, "GET", params, null, true),


    /**
     * @tags CHAdmins
     * @name v1ChadminsUpdate
     * @summary Update cloud hospital admin user.
     * @request PUT:/api/v1/chadmins/{chAdminId}
     * @secure
     * @description Sample request: PUT /api/v1/chadmins/1 { "email": "adminupdate@icloudhospital.com", "firstName": "Cloud", "lastName": "Hospital", "photo": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png", "photoThumbnail": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png", "gender": "NotSpecified", "dateOfBirth": "2020-02-22T09:09:19.082Z", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1ChadminsUpdate: (chAdminId: number, data: UpdateCHAdminCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/chadmins/${chAdminId}`, "PUT", params, data, true),


    /**
     * @tags CHAdmins
     * @name v1ChadminsDelete
     * @summary Delete cloud hospital admin user.
     * @request DELETE:/api/v1/chadmins/{chAdminId}
     * @secure
     * @description Sample request: DELETE /api/v1/chadmins/1
     */
    v1ChadminsDelete: (chAdminId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/chadmins/${chAdminId}`, "DELETE", params, null, true),


    /**
     * @tags CHManagers
     * @name v1ChmanagersCreate
     * @summary Create cloud hospital manager.
     * @request POST:/api/v1/chmanagers
     * @secure
     * @description Sample request: POST /api/v1/chmanagers { "userName": "chmanager", "email": "chmanger@icloudhospital.com", "firstName": "cloud", "lastName": "manager", "photo": "string", "photoThumbnail": "string", "gender": "NotSpecified", "dateOfBirth": "2020-02-22T15:28:09.897Z", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1ChmanagersCreate: (data: CreateCHManagerCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/chmanagers`, "POST", params, data, true),


    /**
     * @tags CHManagers
     * @name v1ChmanagersList
     * @summary Get cloud hospital managers.
     * @request GET:/api/v1/chmanagers
     * @secure
     * @description Sample request: GET /api/v1/chmanagers { "pageQueryFilter": { "page": 1, "limit": 20, "lastRetrived": "2020-02-05T08:40" }, "searchString": "chmanager" }
     */
    v1ChmanagersList: (query: { Id?: number, Fullname?: string, Email?: string, Gender?: Gender, DateOfBirth?: string, Created?: string, page?: number, limit?: number, lastRetrieved?: string, searchString?: string }, params?: RequestParams) =>
      this.request<CHManagersViewModel, any>(`/api/v1/chmanagers${this.addQueryParams(query)}`, "GET", params, null, true),


    /**
     * @tags CHManagers
     * @name v1ChmanagersDetail
     * @summary Get cloud hospital manager.
     * @request GET:/api/v1/chmanagers/{chManagerId}
     * @secure
     * @description Sample request: GET /api/v1/chmanagers/1
     */
    v1ChmanagersDetail: (managerId: number, chManagerId: string, params?: RequestParams) =>
      this.request<CHManagerViewModel, any>(`/api/v1/chmanagers/${chManagerId}`, "GET", params, null, true),


    /**
     * @tags CHManagers
     * @name v1ChmanagersUpdate
     * @summary Update cloud hospital manager.
     * @request PUT:/api/v1/chmanagers/{chManagerId}
     * @secure
     * @description Sample request: PUT /api/v1/chmanagers/1 { "firstName": "cloud", "lastName": "manager", "photo": "string", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1ChmanagersUpdate: (chManagerId: number, data: UpdateCHManagerCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/chmanagers/${chManagerId}`, "PUT", params, data, true),


    /**
     * @tags CHManagers
     * @name v1ChmanagersDelete
     * @summary Delete cloud hospital manager.
     * @request DELETE:/api/v1/chmanagers/{chManagerId}
     * @secure
     * @description Smaple request: DELETE /api/v1/chmanagers/1
     */
    v1ChmanagersDelete: (chManagerId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/chmanagers/${chManagerId}`, "DELETE", params, null, true),


    /**
     * @tags Countries
     * @name v1CountriesCreate
     * @summary Create a country.
     * @request POST:/api/v1/countries
     * @secure
     * @description Sample request: POST /api/v1/countries { "name": "Korea", "description": "Republic of Korea", "medias": [ { "mediaType": "Photo", "url": "https://cloudhospitalblob.blob.core.windows.net/imagecontainer/SouthKorea.png", "thumbnailUrl": "https://cloudhospitalblob.blob.core.windows.net/thumbnailcontainer/SouthKorea.png", "description": "string" } ] }
     */
    v1CountriesCreate: (data: CreateCountryCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/countries`, "POST", params, data, true),


    /**
     * @tags Countries
     * @name v1CountriesList
     * @summary Get all countries.
     * @request GET:/api/v1/countries
     * @description Sample request: GET /api/v1/countries { "pageQueryFilter": { "page": 1, "limit": 20, "lastRetrived": "2020-02-05T08:40" }, "searchString": "Korea" }
     */
    v1CountriesList: (query: { page?: number, limit?: number, lastRetrieved?: string, searchString?: string }, params?: RequestParams) =>
      this.request<CountriesViewModel, any>(`/api/v1/countries${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Countries
     * @name v1CountriesDetail
     * @summary Get country.
     * @request GET:/api/v1/countries/{countryId}
     * @description Sample request: GET /api/v1/countries/1
     */
    v1CountriesDetail: (countryId: number, params?: RequestParams) =>
      this.request<CountryViewModel, any>(`/api/v1/countries/${countryId}`, "GET", params, null),


    /**
     * @tags Countries
     * @name v1CountriesUpdate
     * @summary Update country.
     * @request PUT:/api/v1/countries/{countryId}
     * @secure
     * @description Sample request: PUT /api/v1/countries/1 { "name": "USA", "description": "United States of America" "medias": [ { "mediaType": 0, "url": "https://cloudhospitalblob.blob.core.windows.net/imagecontainer/SouthKorea.png", "thumbnailUrl": "https://cloudhospitalblob.blob.core.windows.net/thumbnailcontainer/SouthKorea.png" "description": "string", "order": 0 }, { "mediaType": 1, "url": "string", "description": "string", "order": 1 } ], }
     */
    v1CountriesUpdate: (countryId: number, data: UpdateCountryCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/countries/${countryId}`, "PUT", params, data, true),


    /**
     * @tags Countries
     * @name v1CountriesDelete
     * @summary Delete country.
     * @request DELETE:/api/v1/countries/{countryId}
     * @secure
     * @description Sample request: DELETE /api/v1/countries/1
     */
    v1CountriesDelete: (countryId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/countries/${countryId}`, "DELETE", params, null, true),


    /**
     * @tags Doctors
     * @name v1DoctorsCreate
     * @summary Create hospital doctor.
     * @request POST:/api/v1/doctors
     * @secure
     * @description Sample request: POST /api/v1/doctors { "userName": "cloudDoctor", "email": "doctor@icloudhospital.com", "hospitalId": 1, "firstName": "cloud", "lastName": "doctor", "photo": "string", "photoThumbnail": "string", "gender": "NotSpecified", "dateOfBirth": "2020-02-22T17:57:32.048Z", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1DoctorsCreate: (data: CreateDoctorCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/doctors`, "POST", params, data, true),


    /**
     * @tags Doctors
     * @name v1DoctorsList
     * @summary Get all hospital doctors.
     * @request GET:/api/v1/doctors
     * @description Sample request: GET /api/v1/doctors { "pageQueryFilter": { "page": 1, "limit": 20, "lastRetrived": "2020-02-05T08:40" }, "searchString": "doctor"
     */
    v1DoctorsList: (query: { Id?: number, Fullname?: string, Email?: string, Gender?: Gender, DateOfBirth?: string, Created?: string, page?: number, limit?: number, lastRetrieved?: string, searchString?: string, hospitalId?: number }, params?: RequestParams) =>
      this.request<DoctorsViewModel, any>(`/api/v1/doctors${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Doctors
     * @name v1DoctorsDetail
     * @summary Get hospital doctor.
     * @request GET:/api/v1/doctors/{doctorId}
     * @description Sample request: GET /api/v1/doctors/1
     */
    v1DoctorsDetail: (doctorId: number, params?: RequestParams) =>
      this.request<DoctorViewModel, any>(`/api/v1/doctors/${doctorId}`, "GET", params, null),


    /**
     * @tags Doctors
     * @name v1DoctorsUpdate
     * @summary Update hospital doctor.
     * @request PUT:/api/v1/doctors/{doctorId}
     * @secure
     * @description Sample request: PUT /api/v1/doctors/1 { "firstName": "string", "lastName": "string", "photo": "string", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1DoctorsUpdate: (doctorId: number, data: UpdateDoctorCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/doctors/${doctorId}`, "PUT", params, data, true),


    /**
     * @tags Doctors
     * @name v1DoctorsDelete
     * @summary Delete doctor.
     * @request DELETE:/api/v1/doctors/{doctorId}
     * @secure
     * @description Sample request: DELETE /api/v1/doctors/1
     */
    v1DoctorsDelete: (doctorId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/doctors/${doctorId}`, "DELETE", params, null, true),


    /**
     * @tags Equipments
     * @name v1HospitalsEquipmentsCreate
     * @summary Create an equipment and add to a hospital.
     * @request POST:/api/v1/hospitals/{hospitalId}/equipments
     * @secure
     * @description Sample request: POST /api/v1/hospitals/1/equipments { "name": "Afroasia ltd", "description": "Medical equipment", "medias": [ { "mediaType": 0, "url": "imageurl", "description": "string", "order": 0 } ] }
     */
    v1HospitalsEquipmentsCreate: (hospitalId: number, data: CreateEquipmentCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/hospitals/${hospitalId}/equipments`, "POST", params, data, true),


    /**
     * @tags Equipments
     * @name v1HospitalsEquipmentsDetail
     * @summary Get equipment.
     * @request GET:/api/v1/hospitals/{hospitalId}/equipments/{equipmentId}
     * @description Sample request: GET /api/v1/hospitals/1/equipments/1
     */
    v1HospitalsEquipmentsDetail: (hospitalId: number, equipmentId: number, params?: RequestParams) =>
      this.request<EquipmentViewModel, any>(`/api/v1/hospitals/${hospitalId}/equipments/${equipmentId}`, "GET", params, null),


    /**
     * @tags Equipments
     * @name v1HospitalsEquipmentsUpdate
     * @summary Update equipment.
     * @request PUT:/api/v1/hospitals/{hospitalId}/equipments/{equipmentId}
     * @secure
     * @description Sample request: PUT /api/v1/hospitals/1/equipments/1 { "description": "Upgraded medical equipment" }
     */
    v1HospitalsEquipmentsUpdate: (hospitalId: number, equipmentId: number, data: UpdateEquipmentCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/equipments/${equipmentId}`, "PUT", params, data, true),


    /**
     * @tags Equipments
     * @name v1HospitalsEquipmentsDelete
     * @summary Delete equipment.
     * @request DELETE:/api/v1/hospitals/{hospitalId}/equipments/{equipmentId}
     * @secure
     * @description Sample request: DELETE /api/v1/hospitals/1/equipments/1
     */
    v1HospitalsEquipmentsDelete: (hospitalId: number, equipmentId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/equipments/${equipmentId}`, "DELETE", params, null, true),


    /**
     * @tags Equipments
     * @name v1HospitalsEquipmentsList
     * @summary Get all equipments.
     * @request GET:/api/v1/hospitals/equipments
     * @description Sample request: GET /api/v1/hospitals/1/equipments { "pageQueryFilter": { "page": 1, "limit": 20, "lastRetrived": "2020-02-05T08:40" }, "searchString": "Medical" }
     */
    v1HospitalsEquipmentsList: (query: { page?: number, limit?: number, lastRetrieved?: string, searchString?: string, hospitalId?: number }, params?: RequestParams) =>
      this.request<EquipmentsViewModel, any>(`/api/v1/hospitals/equipments${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Hospitals
     * @name v1HospitalsCreate
     * @summary Create a hospital.
     * @request POST:/api/v1/hospitals
     * @secure
     * @description Sample request: POST /api/v1/hospitals { "name": "Samsung Medical Center", "description": "Comprehensive Cancer Center in Seoul, South Korea is nationally ranked in 1 adult specialty.", "logo": "http://www.samsunghospital.com/home/main/index.do", "overview": "Overview of Samsung Medical Center", "bedsCount": 1436, "operationRoomsCount": 34, "icuBedsCount": 12, "departmentsCount": 20, "medicalStaffCount": 600, "countryId": 1, "awards": [ { "name": "Award1", "image": "string", "date": "2020-02-05T09:29:19.240Z" }, { "name": "Award2", "image": "string", "date": "2020-02-05T09:29:19.240Z" } ], "medias": [ { "mediaType": "Photo", "url": "https://cloudhospitalblob.blob.core.windows.net/imagecontainer/SamsungMedicalCenter.jpg", "thumbnailUrl": "https://cloudhospitalblob.blob.core.windows.net/thumbnailcontainer/SamsungMedicalCenter.jpg", "description": "string", "order": 0 }, { "mediaType": "Video", "url": "string", "description": "string", "order": 1 } ], "location": { "latitude": 37.4881568, "longitude": 127.0855952, "country": "Korea", "state": "string", "county": "Gangnamgu", "city": "Seoul", "zipCode": "12345", "address": "Il-won ro 81" } }
     */
    v1HospitalsCreate: (data: CreateHospitalCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/hospitals`, "POST", params, data, true),


    /**
     * @tags Hospitals
     * @name v1HospitalsList
     * @summary Get all hospitals.
     * @request GET:/api/v1/hospitals
     * @description Sample request: GET /api/v1/hospitals { "pageQueryFilter": { "page": 1, "limit": 20, "lastRetrived": "2020-02-05T08:40" }, "searchString": "Samsung" }
     */
    v1HospitalsList: (query: { page?: number, limit?: number, lastRetrieved?: string, searchString?: string, countryId?: number }, params?: RequestParams) =>
      this.request<HospitalsViewModel, any>(`/api/v1/hospitals${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Hospitals
     * @name v1HospitalsDetail
     * @summary Get hospita.
     * @request GET:/api/v1/hospitals/{hospitalId}
     * @description Sample request: GET /api/v1/hospitals/1
     */
    v1HospitalsDetail: (hospitalId: number, params?: RequestParams) =>
      this.request<HospitalViewModel, any>(`/api/v1/hospitals/${hospitalId}`, "GET", params, null),


    /**
     * @tags Hospitals
     * @name v1HospitalsUpdate
     * @summary Update hospital.
     * @request PUT:/api/v1/hospitals/{hospitalId}
     * @secure
     * @description Sameple request: PUT /api/v1/hospitals { "overview": "Overview of Samsung Medical Center", "bedsCount": 2436, "operationRoomsCount": 44, "icuBedsCount": 122, "departmentsCount": 200, "medicalStaffCount": 1200, }
     */
    v1HospitalsUpdate: (hospitalId: number, data: UpdateHospitalCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}`, "PUT", params, data, true),


    /**
     * @tags Hospitals
     * @name v1HospitalsDelete
     * @summary Delete hospital.
     * @request DELETE:/api/v1/hospitals/{hospitalId}
     * @secure
     * @description Sample request: DELETE /api/v1/hospitals/1
     */
    v1HospitalsDelete: (hospitalId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}`, "DELETE", params, null, true),


    /**
     * @tags HospitalSpecialties
     * @name v1HospitalsSpecialtiesCreate
     * @summary Create hospitalSpecialty.
     * @request POST:/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}
     * @secure
     * @description Sample request: POST /api/v1/hospitals/1/specialties/1
     */
    v1HospitalsSpecialtiesCreate: (hospitalId: number, specialtyId: number, params?: RequestParams) =>
      this.request<HospitalSpecialtyViewModel, any>(`/api/v1/hospitals/${hospitalId}/specialties/${specialtyId}`, "POST", params, null, true),


    /**
     * @tags HospitalSpecialties
     * @name v1HospitalsSpecialtiesDelete
     * @summary Delete hospitalSpecialty.
     * @request DELETE:/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}
     * @secure
     * @description Sample request: DELETE /api/v1/hospitals/1/specialties/1
     */
    v1HospitalsSpecialtiesDelete: (hospitalId: number, specialtyId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/specialties/${specialtyId}`, "DELETE", params, null, true),


    /**
     * @tags HospitalSpecialties
     * @name v1HospitalsSpecialtysequenceUpdate
     * @summary Update hospitalSpecialty sequence.
     * @request PUT:/api/v1/hospitals/{hospitalId}/specialtysequence
     * @secure
     * @description Sample request: PUT /api/v1/hospitals/1/specialtysequence { "specialtyType": "Endocrinology", "hospitalSpecialtySequence": [14, 30, 5, 7] }
     */
    v1HospitalsSpecialtysequenceUpdate: (hospitalId: number, query: { specialtyType?: SpecialtyType }, data: UpdateHospitalSpecialtySequenceCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/specialtysequence${this.addQueryParams(query)}`, "PUT", params, data, true),


    /**
     * @tags HospitalSpecialties
     * @name v1HospitalsSpecialtiesList
     * @summary Get all hospitalSpecialties.
     * @request GET:/api/v1/hospitals/specialties
     * @description Sample request: GET /api/v1/hospitals/specialties
     */
    v1HospitalsSpecialtiesList: (query: { page?: number, limit?: number, lastRetrieved?: string, searchString?: string, hospitalId?: number, specialtyType?: SpecialtyType }, params?: RequestParams) =>
      this.request<HospitalSpecialtiesViewModel, any>(`/api/v1/hospitals/specialties${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Identity
     * @name v1IdentityList
     * @summary Get current user's Identity claims.
     * @request GET:/api/v1/identity
     * @secure
     * @description Smaple request: GET /api/v1/identity
     */
    v1IdentityList: (params?: RequestParams) =>
      this.request<any, any>(`/api/v1/identity`, "GET", params, null, true),


    /**
     * @tags Images
     * @name v1ImagesCreate
     * @request POST:/api/v1/images
     * @secure
     */
    v1ImagesCreate: (params?: RequestParams) =>
      this.request<any, any>(`/api/v1/images`, "POST", params, null, true),


    /**
     * @tags Managers
     * @name v1ManagersCreate
     * @summary Create hospital manager.
     * @request POST:/api/v1/managers
     * @secure
     * @description Sample request: POST /api/v1/managers { "userName": "manager", "email": "manger@icloudhospital.com", "hospitalId": 1, "firstName": "cloud", "lastName": "manager", "photo": "string", "photoThumbnail": "string", "gender": "NotSpecified", "dateOfBirth": "2020-02-22T15:28:09.897Z", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1ManagersCreate: (data: CreateManagerCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/managers`, "POST", params, data, true),


    /**
     * @tags Managers
     * @name v1ManagersList
     * @summary Get all hospital managers.
     * @request GET:/api/v1/managers
     * @description Sample request: GET /api/v1/managers { "pageQueryFilter": { "page": 1, "limit": 20, "lastRetrived": "2020-02-05T08:40" }, "searchString": "manager" }
     */
    v1ManagersList: (query: { Id?: number, Fullname?: string, Email?: string, Gender?: Gender, DateOfBirth?: string, Created?: string, page?: number, limit?: number, lastRetrieved?: string, searchString?: string, hospitalId?: number }, params?: RequestParams) =>
      this.request<ManagersViewModel, any>(`/api/v1/managers${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Managers
     * @name v1ManagersDetail
     * @summary Get hospital manager.
     * @request GET:/api/v1/managers/{managerId}
     * @description Sample request: GET /api/v1/managers/1
     */
    v1ManagersDetail: (managerId: number, params?: RequestParams) =>
      this.request<ManagerViewModel, any>(`/api/v1/managers/${managerId}`, "GET", params, null),


    /**
     * @tags Managers
     * @name v1ManagersUpdate
     * @summary Update hospital manager.
     * @request PUT:/api/v1/managers/{managerId}
     * @secure
     * @description Sample request: PUT /api/v1/managers/1 { "firstName": "string", "lastName": "string", "photo": "string", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1ManagersUpdate: (managerId: number, data: UpdateManagerCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/managers/${managerId}`, "PUT", params, data, true),


    /**
     * @tags Managers
     * @name v1ManagersDelete
     * @summary Delete hospital manager.
     * @request DELETE:/api/v1/managers/{managerId}
     * @secure
     * @description Sample request: DELETE /api/v1/managers/1
     */
    v1ManagersDelete: (managerId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/managers/${managerId}`, "DELETE", params, null, true),


    /**
     * @tags Movies
     * @name v1MoviesCreate
     * @request POST:/api/v1/movies
     * @secure
     */
    v1MoviesCreate: (params?: RequestParams) =>
      this.request<any, any>(`/api/v1/movies`, "POST", params, null, true),


    /**
     * @tags Partners
     * @name v1PartnersCreate
     * @summary Create partner.
     * @request POST:/api/v1/partners
     * @secure
     * @description Sample request: POST /api/v1/partners { "userName": "string", "email": "string", "firstName": "string", "lastName": "string", "photo": "string", "photoThumbnail": "string", "gender": "NotSpecified", "dateOfBirth": "2020-02-22T18:04:18.025Z", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1PartnersCreate: (data: CreatePartnerCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/partners`, "POST", params, data, true),


    /**
     * @tags Partners
     * @name v1PartnersList
     * @summary Get all partners.
     * @request GET:/api/v1/partners
     * @description Sample request: GET /api/v1/partners { "pageQueryFilter": { "page": 1, "limit": 20, "lastRetrived": "2020-02-05T08:40" }, "searchString": "patner" }
     */
    v1PartnersList: (query: { Id?: number, Fullname?: string, Email?: string, Gender?: Gender, DateOfBirth?: string, Created?: string, page?: number, limit?: number, lastRetrieved?: string, searchString?: string }, params?: RequestParams) =>
      this.request<PartnersViewModel, any>(`/api/v1/partners${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Partners
     * @name v1PartnersDetail
     * @summary Get partner.
     * @request GET:/api/v1/partners/{partnerId}
     * @description Sample request: GET /api/v1/patners/1
     */
    v1PartnersDetail: (partnerId: number, params?: RequestParams) =>
      this.request<PartnerViewModel, any>(`/api/v1/partners/${partnerId}`, "GET", params, null),


    /**
     * @tags Partners
     * @name v1PartnersUpdate
     * @summary Update partner.
     * @request PUT:/api/v1/partners/{partnerId}
     * @secure
     * @description Sample request: PUT /api/v1/patners/1 { firstName": "string", "lastName": "string", "photo": "string", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1PartnersUpdate: (partnerId: number, data: UpdatePartnerCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/partners/${partnerId}`, "PUT", params, data, true),


    /**
     * @tags Partners
     * @name v1PartnersDelete
     * @summary Delete patner.
     * @request DELETE:/api/v1/partners/{partnerId}
     * @secure
     * @description Sample request: DELETE /api/v1/partners/1
     */
    v1PartnersDelete: (partnerId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/partners/${partnerId}`, "DELETE", params, null, true),


    /**
     * @tags Patients
     * @name v1PatientsCreate
     * @summary Create patient.
     * @request POST:/api/v1/patients
     * @secure
     * @description Sample request: POST /api/v1/patients { "referralCode": "123456", "email": "patient@icloudhospital.com", "firstName": "patient", "lastName": "cloud", "photo": "string", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1PatientsCreate: (data: CreatePatientCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/patients`, "POST", params, data, true),


    /**
     * @tags Patients
     * @name v1PatientsList
     * @summary Get all patients.
     * @request GET:/api/v1/patients
     * @description Sample request: GET /api/v1/patients { "pageQueryFilter": { "page": 1, "limit": 20, "lastRetrived": "2020-02-05T08:40" }, "searchString": "patient" }
     */
    v1PatientsList: (query: { Id?: number, Fullname?: string, Email?: string, Gender?: Gender, DateOfBirth?: string, Created?: string, page?: number, limit?: number, lastRetrieved?: string, searchString?: string }, params?: RequestParams) =>
      this.request<PatientsViewModel, any>(`/api/v1/patients${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Patients
     * @name v1PatientsDetail
     * @summary Get patient.
     * @request GET:/api/v1/patients/{patientId}
     * @description Sample request: GET /api/v1/patients/1
     */
    v1PatientsDetail: (patientId: number, params?: RequestParams) =>
      this.request<PatientViewModel, any>(`/api/v1/patients/${patientId}`, "GET", params, null),


    /**
     * @tags Patients
     * @name v1PatientsUpdate
     * @summary Update patient.
     * @request PUT:/api/v1/patients/{patientId}
     * @secure
     * @description Sample request: PUT /api/v1/patients/1 { "referralCode": "string", "firstName": "patient", "lastName": "cloud", "photo": "string", "locations": [ { "locationType": "LivesIn", "latitude": 0, "longitude": 0, "country": "string", "state": "string", "county": "string", "city": "string", "zipCode": "string", "address": "string" } ] }
     */
    v1PatientsUpdate: (patientId: number, data: UpdatePatientCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/patients/${patientId}`, "PUT", params, data, true),


    /**
     * @tags Patients
     * @name v1PatientsDelete
     * @summary Delete patient.
     * @request DELETE:/api/v1/patients/{patientId}
     * @secure
     * @description Sample request: DELETE /api/v1/patients/1
     */
    v1PatientsDelete: (patientId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/patients/${patientId}`, "DELETE", params, null, true),


    /**
     * @tags Profiles
     * @name v1ProfilesList
     * @summary Get current user's profile.
     * @request GET:/api/v1/profiles
     * @secure
     * @description Sample request: GET /api/v1/profiles
     */
    v1ProfilesList: (params?: RequestParams) =>
      this.request<UserViewModel, any>(`/api/v1/profiles`, "GET", params, null, true),


    /**
     * @tags Profiles
     * @name v1ProfilesChangeemailCreate
     * @summary Change user's email on both Identity and Api.
     * @request POST:/api/v1/profiles/changeemail
     * @secure
     * @description Sample request: POST /api/v1/profiles/changeEmail { "email": "user@example.com" }
     */
    v1ProfilesChangeemailCreate: (data: ChangeEmailCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/profiles/changeemail`, "POST", params, data, true),


    /**
     * @tags Services
     * @name v1HospitalsSpecialtiesServicesCreate
     * @summary Create service.
     * @request POST:/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services
     * @secure
     * @description Sample request: POST /api/v1/hospitals/1/specialties/1/services { "name": "Heart check up", "description": "Asan Hospital (Asan Medical Center) is the largest multidisciplinary medical center in South Korea, which can serve 2,700 patients at once.The key specialties in the hospital are organ transplant, oncology, cardiology, and cardiac surgery.Almost half of all heart transplants in South Korea are carried out (45%) at Asan.The success of organ transplants ranges from 90%. Every day, 11,800 outpatients and 2,550 inpatients are treated in Asan Hospital. Medical tourists from the USA, China, the UAE, Russia, Kazakhstan, and Mongolia choose Asan Hospital.", "minPrice": 2235, "maxPrice": 2566, "priceReuqest": false, "procedure": "Treatment" }
     */
    v1HospitalsSpecialtiesServicesCreate: (hospitalId: number, specialtyId: number, data: CreateServiceCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/hospitals/${hospitalId}/specialties/${specialtyId}/services`, "POST", params, data, true),


    /**
     * @tags Services
     * @name v1HospitalsSpecialtiesServicesDetail
     * @summary Get service.
     * @request GET:/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}
     * @description Sample request: GET /api/v1/hospitals/1/specialties/1/services/1
     */
    v1HospitalsSpecialtiesServicesDetail: (hospitalId: number, specialtyId: number, serviceId: number, params?: RequestParams) =>
      this.request<ServiceViewModel, any>(`/api/v1/hospitals/${hospitalId}/specialties/${specialtyId}/services/${serviceId}`, "GET", params, null),


    /**
     * @tags Services
     * @name v1HospitalsSpecialtiesServicesUpdate
     * @summary Update service.
     * @request PUT:/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}
     * @secure
     * @description Sample request: PUT /api/v1/hospitals/1/specialties/1/services/1 { "name": "Extended analysis of blood", "description": "Extended analysis of blood description.", "minPrice": 1000, "maxPrice": 2600, "priceReuqest": false }
     */
    v1HospitalsSpecialtiesServicesUpdate: (hospitalId: number, specialtyId: number, serviceId: number, data: UpdateServiceCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/specialties/${specialtyId}/services/${serviceId}`, "PUT", params, data, true),


    /**
     * @tags Services
     * @name v1HospitalsSpecialtiesServicesDelete
     * @summary Delete service.
     * @request DELETE:/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}
     * @secure
     * @description Sample request: DELETE /api/v1/hospitals/1/specialties/1/services/1
     */
    v1HospitalsSpecialtiesServicesDelete: (hospitalId: number, specialtyId: number, serviceId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/specialties/${specialtyId}/services/${serviceId}`, "DELETE", params, null, true),


    /**
     * @tags Services
     * @name v1HospitalsSpecialtiesServicesquenceUpdate
     * @summary Update service sequence.
     * @request PUT:/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/servicesquence
     * @secure
     * @description Smaple request: PUT /api/v1/hospitals/1/specialties/1/servicesquence { "serviceSequence": [1, 3, 5] }
     */
    v1HospitalsSpecialtiesServicesquenceUpdate: (hospitalId: number, specialtyId: number, data: UpdateServiceSequenceCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/hospitals/${hospitalId}/specialties/${specialtyId}/servicesquence`, "PUT", params, data, true),


    /**
     * @tags Services
     * @name v1HospitalsServicesList
     * @summary Get all services.
     * @request GET:/api/v1/hospitals/services
     * @description Sample request: GET /api/v1/hospitals/services
     */
    v1HospitalsServicesList: (query: { page?: number, limit?: number, lastRetrieved?: string, searchString?: string, hospitalId?: number, specialtyType?: SpecialtyType }, params?: RequestParams) =>
      this.request<ServicesViewModel, any>(`/api/v1/hospitals/services${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Specialties
     * @name v1SpecialtiesCreate
     * @summary Create specialty.
     * @request POST:/api/v1/specialties
     * @secure
     * @description Sample request: POST /api/v1/specialties { "name": "Coronary artery disease", "description": "Coronary artery disease", "specialtyType": "Cardiology" }
     */
    v1SpecialtiesCreate: (query: { specialtyType?: SpecialtyType }, data: CreateSpecialtyCommand, params?: RequestParams) =>
      this.request<number, any>(`/api/v1/specialties${this.addQueryParams(query)}`, "POST", params, data, true),


    /**
     * @tags Specialties
     * @name v1SpecialtiesList
     * @summary Get all specialties.
     * @request GET:/api/v1/specialties
     * @description Sample request: GET /api/v1/specialties
     */
    v1SpecialtiesList: (query: { page?: number, limit?: number, lastRetrieved?: string, searchString?: string, specialtyType?: SpecialtyType }, params?: RequestParams) =>
      this.request<SpecialtiesViewModel, any>(`/api/v1/specialties${this.addQueryParams(query)}`, "GET", params, null),


    /**
     * @tags Specialties
     * @name v1SpecialtiesDetail
     * @summary Get specialty.
     * @request GET:/api/v1/specialties/{specialtyId}
     * @description Sample request: GET /api/v1/specialties/1
     */
    v1SpecialtiesDetail: (specialtyId: number, params?: RequestParams) =>
      this.request<SpecialtyViewModel, any>(`/api/v1/specialties/${specialtyId}`, "GET", params, null),


    /**
     * @tags Specialties
     * @name v1SpecialtiesUpdate
     * @summary Update specialty
     * @request PUT:/api/v1/specialties/{specialtyId}
     * @secure
     * @description Sample request: PUT /api/v1/specialties/1 { "name": "Dilated cardiomyopathy", "description": "Dilated cardiomyopathy" }
     */
    v1SpecialtiesUpdate: (specialtyId: number, data: UpdateSpecialtyCommand, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/specialties/${specialtyId}`, "PUT", params, data, true),


    /**
     * @tags Specialties
     * @name v1SpecialtiesDelete
     * @summary Delete specialty.
     * @request DELETE:/api/v1/specialties/{specialtyId}
     * @secure
     * @description Sample request: DELETE /api/v1/specialties/1
     */
    v1SpecialtiesDelete: (specialtyId: number, params?: RequestParams) =>
      this.request<boolean, any>(`/api/v1/specialties/${specialtyId}`, "DELETE", params, null, true),
  }

}
