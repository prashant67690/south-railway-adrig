export let machine = [
  "BCM",
  "UNIMAT 4S",
  "MFI",
  "MPI",
  "MDU",
  "DUOMAT",
  "CSM",
  "DGS 353",
  "SBCM",
  "BRM R32",
  "UTV",
  "T 28",
  "TRT",
  "3X DTE",
];

export let work = [
  "RR / WW",
  "WELDING",
  "CMS XG RENEWAL",
  "SEJ / RR",
  "TRR / WW",
  "MFBW",
  "20R/P UNLOADING",
  "JOINT INSPECTION",
  "T/O",
  "RR / WW",
  "BRIDGE WORK",
  "FOB",
  "PF WORK",
];

export let sectionData = {
  "AJJ-RU": {
    section: [
      "AJJ-AJJN",
      "MLPM-AJJN",
      "AJJN-TRT",
      "TRT-POI",
      "POI-VKZ",
      "VKZ-NG",
      "NG-EKM",
      "EKM-VGA",
      "VGA-PUT",
      "PUT-TDK",
      "TDK-PUDI",
      "PUDI-RU",
    ],
    station: [
      "AJJ-YD",
      "MLPM-YD",
      "AJJN-YD",
      "TRT-YD",
      "POI-YD",
      "NG-YD",
      "VAG-YD",
      "PUT-YD",
      "TDK-YD",
      "PUDI-YD",
      "RU-YD",
    ],
  },
  "MAS-AJJ": {
    station: [
      "MAS-BBQ",
      "MMCC-BBQ",
      "BBQ-VPY",
      "VPY-VLK",
      "VLK-ABU",
      "ABU-AVD",
      "AVD-PAB",
      "PAB-TI",
      "TI-TRL",
      "TRL-KBT",
      "KBT-TO",
      "TO-AJJ",
    ],
    section: [
      "MAS-YD",
      "BBQ-YD",
      "MMCC-YD",
      "VPY-YD",
      "VLK-YD",
      "ABU-YD",
      "AVD-YD",
      "PAB-YD",
      "TI-YD",
      "TRL-YD",
      "KBT-YD",
      "TO-YD",
      "AJJ-YD",
    ],
  },
  "MSB-VM": {
    section: [
      "MSB-MS",
      "MS-MKK",
      "MKK-MBM",
      "MBM-STM",
      "STM-PV",
      "PV-TBM",
      "TBM-PRGL",
      "PRGL-VDR",
      "VDR-UPM",
      "UPM-GI",
      "POTI-CTM",
      "CTM-MMNK",
      "MMNK-SKL",
      "SKL-PWU",
      "PWU-CGL",
      "CGL-OV",
      "OV-PTM",
      "PTM-KGZ",
      "KGZ-MMK",
      "MMK-MLMR",
      "MLMR-ACK",
      "ACK-TZD",
      "TZD-OLA",
      "OLA-TMV",
      "TMV-MTL",
      "MTL-PEI",
      "PEI-VVN",
      "VVN-MYP",
      "MYP-VM",
    ],
    station: [
      "MS-YD",
      "MKK-YD",
      "MBM-YD",
      "STM-YD",
      "PV-YD",
      "TBM-YD",
      "VDR-YD",
      "GI-YD",
      "CTM-YD",
      "SKL-YD",
      "CGL-YD",
      "OV-YD",
      "KGZ-YD",
      "MMK-YD",
      "MLMR-YD",
      "TZD-YD",
      "OLA-YD",
      "TMV-YD",
      "MTL-YD",
      "PEI-YD",
      "VVN-YD",
      "MYP-YD",
      "VM-YD",
    ],
  },
  "AJJ-KPD": {
    section: [
      "AJJ-MLPM",
      "MLPM-CTRE",
      "CTRE-MDVE",
      "MDVE-SHU",
      "SHU-TUG",
      "TUG-WJR",
      "WJR-MCN",
      "MCN-THL",
      "THL-SVUR",
      "SVUR-KPD",
    ],
    station: [
      "AJJ-YD",
      "MLPM-YD",
      "CTRE-YD",
      "MDVE-YD",
      "SHU-YD",
      "TUG-YD",
      "WJR-YD",
      "MCN-YD",
      "THL-YD",
      "SVUR-YD",
      "KPD-YD",
    ],
  },
  "KPD-JTJ": {
    section: [
      "KPD-LTI",
      "LTI-KVN",
      "KVN-GYM",
      "GYM-VLT",
      "VLT-MPI",
      "MPI-PCKM",
      "PCKM-AB",
      "AB-VGM",
      "VGM-VN",
      "VN-KDY",
      "KDY-JTJ",
    ],
    station: [
      "AJJ-YD",
      "MLPM-YD",
      "CTRE-YD",
      "MDVE-YD",
      "SHU-YD",
      "TUG-YD",
      "WJR-YD",
      "MCN-YD",
      "THL-YD",
      "SVUR-YD",
      "KPD-YD",
      "LTI-YD",
      "KVN-YD",
      "GYM-YD",
      "VLT-YD",
      "MPI-YD",
      "PCKM-YD",
      "AB-YD",
      "VGM-YD",
      "VN-YD",
      "KDY-YD",
      "JTJ-YD",
    ],
  },
  "AJJ-CGL": {
    section: [
      "CGL-RDY",
      "RDY-VB",
      "VB-PALR",
      "PALR-PYV",
      "PYV-WJ",
      "WJ-NTT",
      "NTT-CJ(O)",
      "CJ(O)-CJ(E)",
      "CJ(E)-TMLP",
      "TMLP-TKO",
      "TKO-MLPM",
      "MLPM-AJJ",
    ],
    station: [
      "CGL-YD",
      "PALR-YD",
      "WJ-YD",
      "CJ(O)-YD",
      "CJ(E)-YD",
      "TMLP-YD",
      "MLPM-YD",
      "AJJ-YD",
    ],
  },
  "MAS-GDR": {
    section: [
      "MMC-BBQ",
      "BBQ-KOK",
      "KOK-TNP",
      "TNP-TVT",
      "TVT-ENR",
      "ENR-AIP",
      "AIP-AIPP",
      "AIPP-MJR",
      "MJR-PON",
      "PON-KVP",
      "KVP-GPD",
      "GPD-ELR",
      "ELR-AKM",
      "AKM-TAD",
      "TAD-AKAT",
      "AKAT-SPE",
      "SPE-PEL",
      "PEL-DVR",
      "DVR-NYP",
      "NYP-PYA",
      "PYA-ODR",
      "ODR-GDR",
    ],
    station: [
      "MMC-YD",
      "BBQ-YD",
      "KOK-YD",
      "TNP-YD",
      "TVT-YD",
      "ENR-YD",
      "AIP-YD",
      "AIPP-YD",
      "MJR-YD",
      "PON-YD",
      "KVP-YD",
      "GPD-YD",
      "ELR-YD",
      "AKM-YD",
      "TAD-YD",
      "SPE-YD",
      "PEL-YD",
      "DVR-YD",
      "NYP-YD",
      "PYA-YD",
      "ODR-YD",
      "GDR-YD",
    ],
  },
};
