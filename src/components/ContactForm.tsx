"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type BuyerType =
  | ""
  | "Refinery"
  | "Bullion Dealer"
  | "Trading Company"
  | "Jewelry Manufacturer"
  | "Bank / Financial Institution"
  | "Individual Investor"
  | "Broker"
  | "Other";

type ProductInterest = "" | "Gold Bars" | "Gold Nuggets";

type FormData = {
  fullName: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  buyerType: BuyerType;
  quantityNeeded: string;
  productInterest: ProductInterest;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const FORM_ENDPOINT = "https://formspree.io/f/xlgpwnra";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const countryToCode: Record<string, string> = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  Andorra: "AD",
  Angola: "AO",
  "Antigua and Barbuda": "AG",
  Argentina: "AR",
  Armenia: "AM",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bhutan: "BT",
  Bolivia: "BO",
  "Bosnia and Herzegovina": "BA",
  Botswana: "BW",
  Brazil: "BR",
  Brunei: "BN",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  "Cabo Verde": "CV",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  "Central African Republic": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  Colombia: "CO",
  Comoros: "KM",
  Congo: "CG",
  "Costa Rica": "CR",
  Croatia: "HR",
  Cuba: "CU",
  Cyprus: "CY",
  "Czech Republic": "CZ",
  "Democratic Republic of the Congo": "CD",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Republic": "DO",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Greece: "GR",
  Grenada: "GD",
  Guatemala: "GT",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  Honduras: "HN",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Ireland: "IE",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  Laos: "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  "Marshall Islands": "MH",
  Mauritania: "MR",
  Mauritius: "MU",
  Mexico: "MX",
  Micronesia: "FM",
  Moldova: "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  Netherlands: "NL",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  "North Korea": "KP",
  "North Macedonia": "MK",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  Palestine: "PS",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  Poland: "PL",
  Portugal: "PT",
  Qatar: "QA",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Korea": "KR",
  "South Sudan": "SS",
  Spain: "ES",
  "Sri Lanka": "LK",
  Sudan: "SD",
  Suriname: "SR",
  Sweden: "SE",
  Switzerland: "CH",
  Syria: "SY",
  Taiwan: "TW",
  Tajikistan: "TJ",
  Tanzania: "TZ",
  Thailand: "TH",
  "Timor-Leste": "TL",
  Togo: "TG",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  "Vatican City": "VA",
  Venezuela: "VE",
  Vietnam: "VN",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
};

const baseInputClass =
  "w-full rounded-2xl border bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30";

const getInputClass = (hasError?: boolean) =>
  `${baseInputClass} ${
    hasError
      ? "border-red-500/80 focus:border-red-400"
      : "border-white/10 focus:border-[#d4af37]"
  }`;

const MAX_PHONE_DIGITS = 15;

const sanitizePhoneValue = (value: string) => {
  if (!value) return "";

  const hasPlus = value.startsWith("+");
  const digitsOnly = value.replace(/\D/g, "").slice(0, MAX_PHONE_DIGITS);

  return hasPlus ? `+${digitsOnly}` : digitsOnly;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    buyerType: "",
    quantityNeeded: "",
    productInterest: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [countryQuery, setCountryQuery] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement | null>(null);

  const selectedCountryCode = useMemo(() => {
    if (!form.country) return undefined;
    return countryToCode[form.country];
  }, [form.country]);

  const filteredCountries = useMemo(() => {
    if (!countryQuery.trim()) return countries;

    return countries.filter((country) =>
      country.toLowerCase().includes(countryQuery.toLowerCase()),
    );
  }, [countryQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCountryDropdown(false);
        setHighlightedIndex(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setCountryQuery(form.country);
  }, [form.country]);

  useEffect(() => {
    setHighlightedIndex(filteredCountries.length > 0 ? 0 : -1);
  }, [countryQuery, filteredCountries.length]);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));

    if (submitSuccess) setSubmitSuccess(false);
    if (submitError) setSubmitError("");
  };

  const handleCountrySelect = (country: string) => {
    handleChange("country", country);
    setCountryQuery(country);
    handleChange("phone", "");
    setShowCountryDropdown(false);
    setHighlightedIndex(-1);
  };

  const handleCountryKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !showCountryDropdown &&
      (e.key === "ArrowDown" || e.key === "ArrowUp")
    ) {
      setShowCountryDropdown(true);
      return;
    }

    if (!filteredCountries.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setShowCountryDropdown(true);
      setHighlightedIndex((prev) =>
        prev < filteredCountries.length - 1 ? prev + 1 : 0,
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setShowCountryDropdown(true);
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCountries.length - 1,
      );
    }

    if (e.key === "Enter") {
      if (showCountryDropdown && highlightedIndex >= 0) {
        e.preventDefault();
        handleCountrySelect(filteredCountries[highlightedIndex]);
      }
    }

    if (e.key === "Escape") {
      setShowCountryDropdown(false);
      setHighlightedIndex(-1);
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (form.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter a valid full name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.buyerType) {
      newErrors.buyerType = "Please select buyer type.";
    }

    if (!form.country || !countryToCode[form.country]) {
      newErrors.country = "Please select a valid country from the list.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone / WhatsApp number is required.";
    } else if (!isValidPhoneNumber(form.phone)) {
      newErrors.phone = "Please enter a valid international phone number.";
    }

    if (!form.quantityNeeded.trim()) {
      newErrors.quantityNeeded = "Quantity needed is required.";
    }

    if (!form.productInterest) {
      newErrors.productInterest = "Please select product interest.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Please enter a more detailed message.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);
    setSubmitError("");
    setSubmitSuccess(false);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          company: form.company,
          email: form.email,
          country: form.country,
          phone: form.phone,
          buyerType: form.buyerType,
          quantityNeeded: form.quantityNeeded,
          productInterest: form.productInterest,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setForm({
          fullName: "",
          company: "",
          email: "",
          country: "",
          phone: "",
          buyerType: "",
          quantityNeeded: "",
          productInterest: "",
          message: "",
        });
        setCountryQuery("");
        setErrors({});
        setShowCountryDropdown(false);
        setHighlightedIndex(-1);
      } else {
        setSubmitError(
          data?.errors?.[0]?.message ||
            "Something went wrong. Please try again.",
        );
      }
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Inquiry Form</h2>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className={getInputClass(!!errors.fullName)}
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Company (optional)
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  value={form.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className={getInputClass(!!errors.company)}
                />
                {errors.company && (
                  <p className="mt-2 text-sm text-red-400">{errors.company}</p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={getInputClass(!!errors.email)}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Buyer Type
                </label>
                <select
                  value={form.buyerType}
                  onChange={(e) =>
                    handleChange("buyerType", e.target.value as BuyerType)
                  }
                  className={getInputClass(!!errors.buyerType)}
                >
                  <option value="">Select buyer type</option>
                  <option value="Refinery">Refinery</option>
                  <option value="Bullion Dealer">Bullion Dealer</option>
                  <option value="Trading Company">Trading Company</option>
                  <option value="Jewelry Manufacturer">
                    Jewelry Manufacturer
                  </option>
                  <option value="Bank / Financial Institution">
                    Bank / Financial Institution
                  </option>
                  <option value="Individual Investor">
                    Individual Investor
                  </option>
                  <option value="Broker">Broker</option>
                  <option value="Other">Other</option>
                </select>
                {errors.buyerType && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.buyerType}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative" ref={countryDropdownRef}>
                <label className="mb-2 block text-sm text-white/75">
                  Country
                </label>

                <input
                  type="text"
                  placeholder="Search country..."
                  value={countryQuery}
                  onChange={(e) => {
                    setCountryQuery(e.target.value);
                    handleChange("country", "");
                    handleChange("phone", "");
                    setShowCountryDropdown(true);
                  }}
                  onFocus={() => setShowCountryDropdown(true)}
                  onKeyDown={handleCountryKeyDown}
                  className={getInputClass(!!errors.country)}
                />

                {showCountryDropdown && (
                  <div className="absolute z-30 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#111111] shadow-2xl">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country, index) => (
                        <button
                          key={country}
                          type="button"
                          onClick={() => handleCountrySelect(country)}
                          className={`block w-full border-b border-white/5 px-4 py-3 text-left text-sm transition ${
                            highlightedIndex === index
                              ? "bg-[#d4af37]/15 text-[#f3d46b]"
                              : "text-white/80 hover:bg-white/5"
                          }`}
                        >
                          {country}
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-white/50">
                        No country found
                      </div>
                    )}
                  </div>
                )}

                {errors.country && (
                  <p className="mt-2 text-sm text-red-400">{errors.country}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Phone / WhatsApp
                </label>

                <div
                  className={`rounded-2xl border bg-black/30 px-4 py-3 ${
                    errors.phone
                      ? "border-red-500/80 focus-within:border-red-400"
                      : "border-white/10 focus-within:border-[#d4af37]"
                  }`}
                >
                  <PhoneInput
                    international
                    withCountryCallingCode
                    defaultCountry={selectedCountryCode as any}
                    country={selectedCountryCode as any}
                    value={form.phone}
                    onChange={(value) =>
                      handleChange("phone", sanitizePhoneValue(value || ""))
                    }
                    placeholder={
                      selectedCountryCode
                        ? "Enter phone / WhatsApp number"
                        : "Select country first"
                    }
                    disabled={!selectedCountryCode}
                    className="phone-input-dark"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Quantity Needed
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10kg"
                  value={form.quantityNeeded}
                  onChange={(e) =>
                    handleChange("quantityNeeded", e.target.value)
                  }
                  className={getInputClass(!!errors.quantityNeeded)}
                />
                {errors.quantityNeeded && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.quantityNeeded}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/75">
                  Product Interest
                </label>
                <select
                  value={form.productInterest}
                  onChange={(e) =>
                    handleChange(
                      "productInterest",
                      e.target.value as ProductInterest,
                    )
                  }
                  className={getInputClass(!!errors.productInterest)}
                >
                  <option value="">Select product</option>
                  <option value="Gold Bars">Gold Bars</option>
                  <option value="Gold Nuggets">Gold Nuggets</option>
                </select>
                {errors.productInterest && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.productInterest}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/75">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell us what you need..."
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={getInputClass(!!errors.message)}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {submitSuccess && (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                Inquiry submitted successfully. We will get back to you shortly.
              </div>
            )}

            {submitError && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-[#d4af37]/20 bg-gradient-to-br from-[#191919] to-[#101010] p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Direct Contact</h2>

            <div className="mt-6 space-y-4 text-sm leading-8 text-white/70">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@africagoldexporters.com?subject=Buyer%20Inquiry"
                  className="font-medium text-[#f3d46b] transition hover:text-white hover:underline"
                >
                  info@africagoldexporters.com
                </a>
              </p>

              <p>
                Phone:{" "}
                <a
                  href="tel:+256701523269"
                  className="font-medium text-[#f3d46b] transition hover:text-white hover:underline"
                >
                  +256 701 523 269
                </a>
              </p>

              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/256701523269?text=Hello%20I%20would%20like%20to%20discuss%20a%20gold%20purchase."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#25D366] transition hover:text-white hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </p>

              <p>Location: Kampala, Uganda</p>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Business Hours</h2>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p>Monday – Friday: 08:00 – 18:00 (EAT / UTC+3)</p>
              <p>Saturday: 09:00 – 14:00 (EAT / UTC+3)</p>
              <p>Sunday: By appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
