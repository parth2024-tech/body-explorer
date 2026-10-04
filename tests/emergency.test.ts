import { describe, it, expect } from "vitest";

// Emergency country dispatch lookup helper
export interface EmergencyDispatch {
  countryCode: string;
  countryName: string;
  primaryNumber: string;
  ambulanceSecondary?: string;
  dispatchDescription: string;
}

export const EMERGENCY_DIRECTORY: Record<string, EmergencyDispatch> = {
  IN: {
    countryCode: "IN",
    countryName: "India",
    primaryNumber: "112",
    ambulanceSecondary: "108 / 102",
    dispatchDescription: "National Emergency Service (Ambulance / Police / Fire)",
  },
  US: {
    countryCode: "US",
    countryName: "United States",
    primaryNumber: "911",
    dispatchDescription: "Universal Emergency Dispatch",
  },
  GB: {
    countryCode: "GB",
    countryName: "United Kingdom",
    primaryNumber: "999",
    ambulanceSecondary: "111 (Non-emergency)",
    dispatchDescription: "Emergency Ambulance & Rescue",
  },
  EU: {
    countryCode: "EU",
    countryName: "European Union",
    primaryNumber: "112",
    dispatchDescription: "European Emergency Services",
  },
  AU: {
    countryCode: "AU",
    countryName: "Australia",
    primaryNumber: "000",
    dispatchDescription: "Triple Zero Emergency",
  },
};

export function resolveEmergencyDispatch(localeOrCountry: string): EmergencyDispatch {
  const normalized = (localeOrCountry || "").toUpperCase();
  if (normalized.includes("IN") || normalized.includes("HI")) return EMERGENCY_DIRECTORY.IN;
  if (normalized.includes("US") || normalized.includes("EN-US")) return EMERGENCY_DIRECTORY.US;
  if (normalized.includes("GB") || normalized.includes("UK") || normalized.includes("EN-GB"))
    return EMERGENCY_DIRECTORY.GB;
  if (normalized.includes("AU")) return EMERGENCY_DIRECTORY.AU;
  if (normalized.includes("EU") || normalized.includes("FR") || normalized.includes("DE"))
    return EMERGENCY_DIRECTORY.EU;

  // Global default fallback
  return EMERGENCY_DIRECTORY.IN;
}

// CPR AHA 2020 cadence calculation helper
export function getCprIntervalMs(cadenceBpm: number): number {
  if (cadenceBpm < 100 || cadenceBpm > 120) {
    throw new Error(
      `Cadence ${cadenceBpm} BPM is outside the AHA/ILCOR target band of 100-120 compressions per minute`,
    );
  }
  return (60 / cadenceBpm) * 1000;
}

describe("Emergency Protocol & Dispatch Logic", () => {
  it("resolves India national emergency helpline 112 as primary with 108/102 ambulance context", () => {
    const dispatch = resolveEmergencyDispatch("en-IN");
    expect(dispatch.primaryNumber).toBe("112");
    expect(dispatch.ambulanceSecondary).toContain("108");
    expect(dispatch.countryName).toBe("India");
  });

  it("resolves US emergency dispatch to 911", () => {
    const dispatch = resolveEmergencyDispatch("en-US");
    expect(dispatch.primaryNumber).toBe("911");
    expect(dispatch.countryName).toBe("United States");
  });

  it("resolves UK emergency dispatch to 999", () => {
    const dispatch = resolveEmergencyDispatch("en-GB");
    expect(dispatch.primaryNumber).toBe("999");
    expect(dispatch.countryName).toBe("United Kingdom");
  });

  it("validates that CPR cadence strictly obeys the AHA 2020 100-120 BPM boundary", () => {
    // 105 BPM target cadence
    const interval105 = getCprIntervalMs(105);
    expect(interval105).toBeCloseTo(571.43, 1);

    // Minimum rate: 100 BPM -> 600ms
    expect(getCprIntervalMs(100)).toBe(600);

    // Maximum rate: 120 BPM -> 500ms
    expect(getCprIntervalMs(120)).toBe(500);

    // Out of bounds rates must throw
    expect(() => getCprIntervalMs(90)).toThrow();
    expect(() => getCprIntervalMs(130)).toThrow();
  });
});
