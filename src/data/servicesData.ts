import { ServiceItem } from '../types/service';

export const servicesData: ServiceItem[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    subtitle: 'Everyday care, thoughtfully delivered',
    h1Html: 'Everyday <em>care, thoughtfully delivered</em>',
    tagline: 'Personalized dental care',
    category: 'Preventive Care',
    emoji: '🦷',
    shortDesc: 'Routine cleanings, exams, fillings, and preventive care to keep your smile healthy and bright.',
    intro: 'Regular dental visits help your dentist monitor your oral health, identify concerns early, and build a prevention plan that fits your needs.',
    artLabel: 'General Dentistry · Care tailored to you',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    badgeLabel: 'Ultrasonic Airflow & Micro-Cavity Detection',
    features: [
      {
        step: '01 / ASSESS',
        title: 'Dental examination',
        desc: 'Discuss your concerns, relevant history, and what you hope to achieve during your consultation.'
      },
      {
        step: '02 / PLAN',
        title: 'Preventive care',
        desc: 'Review suitable options, expected steps, alternatives, and any questions you may have.'
      },
      {
        step: '03 / CARE',
        title: 'Treatment planning',
        desc: 'Understand follow-up, home-care guidance, and when to contact the clinic after treatment.'
      }
    ],
    procedures: [
      'Comprehensive Oral & Soft Tissue Examination',
      'Ultrasonic Tartar Scaling & Air-Flow Polishing',
      'High-Definition Digital Bitewing X-Rays',
      'Tooth-Colored Composite Fillings',
      'Fluoride Remineralization Therapy',
      'Emergency Dental Care & Relief'
    ],
    duration: '45–60 minutes',
    specialistId: 'dr-anna-reyes',
    specialistName: 'Dr. Anna Reyes',
    specialistTitle: 'General & Pediatric Dentist',
    idealFor: 'Patients seeking biannual checkups, plaque removal, cavity treatment, and general preventive maintenance.',
    note: 'Please note: This page provides general information only and is not a diagnosis or guarantee of a particular outcome. A licensed dental professional must determine whether a treatment is appropriate for you.',
    questionsTitle: 'Questions about general dentistry?',
    questionsDesc: 'Send an appointment request and the clinic can discuss your concerns, available services, and the next steps with you.',
    overviewParagraphs: [
      'General dentistry serves as the foundation of lifelong oral wellbeing. While many people only seek dental attention when acute pain strikes, routine preventive care is specifically designed to stop decay, enamel erosion, and gum inflammation long before symptoms become noticeable or uncomfortable.',
      'During every routine visit, our clinicians examine not only the visible enamel of your teeth, but also your gums, tongue, palate, salivary glands, and jaw joints. Microscopic plaque colonies continually form bio-films that harden into calculus (tartar) within 24 to 72 hours. Once calcified, this buildup cannot be brushed away at home and requires precision ultrasonic instrumentation to dislodge safely without damaging the delicate enamel.',
      'Modern general dentistry has moved far beyond the uncomfortable metal fillings of the past. Today, we utilize biomimetic composite resins that chemically bond directly to the tooth structure. These restorative materials are shade-matched to your unique enamel tone, restoring full structural integrity, natural light reflection, and chewing resilience while preserving as much of your natural tooth as biologically possible.'
    ],
    symptomsAndSigns: {
      heading: 'Signs It Is Time for a General Checkup',
      intro: 'Even if you are not experiencing severe discomfort, the following common symptoms suggest an evaluation is recommended:',
      items: [
        {
          badge: 'Bleeding Gums',
          title: 'Pink toothbrush or bleeding during flossing',
          description: 'Inflamed or bleeding gums are an early sign of gingivitis, caused by plaque accumulation along the gumline that requires professional scaling.'
        },
        {
          badge: 'Temperature Sensitivity',
          title: 'Sharp pangs with hot coffee or ice water',
          description: 'Lingering sensitivity often signals microscopic enamel thinning, exposed tooth roots, or small fissures where bacteria have penetrated.'
        },
        {
          badge: 'Rough Enamel Edges',
          title: 'A tooth surface feels sharp or catches dental floss',
          description: 'Cracked old fillings or early interproximal cavities can fray floss and trap food particles, accelerating bacterial fermentation.'
        },
        {
          badge: 'Chronic Halitosis',
          title: 'Persistent bad breath or unpleasant morning taste',
          description: 'Volatile sulfur compounds produced by anaerobic bacteria nesting in deep periodontal crevices or decayed fissures.'
        }
      ]
    },
    detailedPhases: [
      {
        phase: 'Phase 01',
        title: 'Diagnostic Imaging & Micro-Exploration',
        narrative: 'We begin with low-radiation digital radiography and high-magnification intraoral cameras. This allows both you and your dentist to clearly view hidden interproximal spaces, bone levels, and early demineralization zones on an overhead display.'
      },
      {
        phase: 'Phase 02',
        title: 'Gentle Ultrasonic Scaling & Air Polishing',
        narrative: 'Our hygienist uses tuned ultrasonic scalers that vibrate at gentle microscopic frequencies to crumble hardened calculus effortlessly, followed by air-powder polishing to lift coffee, tea, and tobacco stains from enamel surfaces.'
      },
      {
        phase: 'Phase 03',
        title: 'Biomimetic Restoration & Preventive Seal',
        narrative: 'If cavities are detected, the decayed tissue is gently cleared under local anesthesia. The site is conditioned, layered with shade-calibrated composite resin, light-cured, and microscopically contoured to harmonize with your natural bite.'
      }
    ],
    recoveryAndCare: {
      heading: 'Post-Care & Prevention Routine',
      paragraphs: [
        'Following a routine cleaning or composite filling, you can return immediately to your daily activities. If local anesthesia was administered, we recommend refraining from chewing hot foods or biting down until the numbness completely wears off to prevent accidental tongue or cheek bites.',
        'Brushing twice daily with a soft-bristled brush and fluoride toothpaste, alongside nightly interdental flossing, maintains the clinical results achieved during your visit. We advise scheduling cleanings every six months to keep bacterial biofilm under control.'
      ],
      tips: [
        'Wait 1 to 2 hours before drinking hot beverages if local anesthesia was used.',
        'Floss gently around fresh fillings; composite reaches full strength immediately upon light curing.',
        'Schedule your follow-up checkup at 6-month intervals to monitor enamel mineralization.'
      ]
    },
    faqs: [
      {
        q: 'How frequently should I visit for general dental care?',
        a: 'The standard recommendation for most adults and children is every six months. However, patients with a history of periodontal disease, high cavity susceptibility, or orthodontic appliances may benefit from 3- to 4-month maintenance checkups.'
      },
      {
        q: 'Are tooth-colored composite fillings as durable as silver amalgam?',
        a: 'Yes. Modern micro-hybrid and nano-filled composite resins offer outstanding compressive strength, bond directly to the tooth substrate to strengthen remaining walls, and look virtually indistinguishable from natural enamel.'
      },
      {
        q: 'Why do my teeth sometimes feel slightly sensitive after a deep cleaning?',
        a: 'When calcified tartar that had been covering root surfaces is removed, the newly exposed cementum may temporarily feel sensitive to temperature changes. This mild sensation resolves naturally within a few days as minerals in your saliva reseal the microscopic tubules.'
      }
    ]
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    subtitle: 'A smile that feels like you',
    h1Html: 'A <em>smile that feels like you</em>',
    tagline: 'Personalized dental care',
    category: 'Aesthetic & Smile',
    emoji: '✨',
    shortDesc: 'Transform your look with veneers, professional whitening, and full smile makeovers.',
    intro: 'Cosmetic dentistry focuses on the appearance of your smile while keeping oral health and your individual goals at the centre of every conversation.',
    artLabel: 'Cosmetic Dentistry · Care tailored to you',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    badgeLabel: 'Hand-Layered Porcelain & Digital Smile Preview',
    features: [
      {
        step: '01 / ASSESS',
        title: 'Professional whitening',
        desc: 'Discuss your concerns, relevant history, and what you hope to achieve during your consultation.'
      },
      {
        step: '02 / PLAN',
        title: 'Veneers consultation',
        desc: 'Review suitable options, expected steps, alternatives, and any questions you may have.'
      },
      {
        step: '03 / CARE',
        title: 'Smile design discussion',
        desc: 'Understand follow-up, home-care guidance, and when to contact the clinic after treatment.'
      }
    ],
    procedures: [
      'In-Clinic Laser Teeth Whitening',
      'Ultra-Thin Porcelain Veneers',
      'Direct Composite Bonding & Gap Closure',
      'Digital Smile Architecture & 3D Simulation',
      'Gum Symmetry & Re-contouring',
      'Comprehensive Smile Transformation'
    ],
    duration: '60–90 minutes',
    specialistId: 'dr-maria-santos',
    specialistName: 'Dr. Maria Santos',
    specialistTitle: 'General & Cosmetic Dentist',
    idealFor: 'Anyone looking to brighten discolored teeth, correct chipped enamel, close gaps, or design a confident, harmonious smile.',
    note: 'Please note: This page provides general information only and is not a diagnosis or guarantee of a particular outcome. A licensed dental professional must determine whether a treatment is appropriate for you.',
    questionsTitle: 'Questions about cosmetic dentistry?',
    questionsDesc: 'Send an appointment request and the clinic can discuss your concerns, available services, and the next steps with you.',
    overviewParagraphs: [
      'Cosmetic dentistry combines biological dental science with fine artistry to enhance the color, proportion, symmetry, and overall appearance of your smile. A radiant smile does not merely elevate your facial aesthetics; it directly transforms self-confidence, interpersonal warmth, and professional presence.',
      'Our approach centers on conservative aesthetic dentistry. Rather than aggressive tooth reduction, we emphasize minimally invasive treatments such as ultra-thin feldspathic and lithium disilicate porcelain veneers, direct composite bonding, and medical-grade in-office photo-activation whitening. Every cosmetic plan is customized to harmonize with your unique facial contours, lip mobility, skin undertone, and personal aesthetic preferences.',
      'Using 3D digital facial scanning and intraoral smile preview software, you can visualize and co-design your future smile before any physical treatment begins. You see how different tooth lengths, edge curvatures, and brightness levels complement your natural speech and facial expressions.'
    ],
    symptomsAndSigns: {
      heading: 'Common Aesthetic Concerns We Address',
      intro: 'Patients seek cosmetic dentistry to resolve a wide spectrum of visual and structural smile concerns:',
      items: [
        {
          badge: 'Deep Discoloration',
          title: 'Intrinsic yellowing, tetracycline stains, or fluorosis',
          description: 'Stains embedded deep within the dentin layer that over-the-counter strips and whitening toothpastes cannot penetrate.'
        },
        {
          badge: 'Chipped & Worn Edges',
          title: 'Fractured incisal corners or uneven tooth lengths',
          description: 'Wear caused by micro-trauma, nocturnal clenching, or age that leaves teeth looking jagged, shortened, or asymmetrical.'
        },
        {
          badge: 'Diastema (Gaps)',
          title: 'Noticeable spaces between front teeth',
          description: 'Gaps between upper or lower incisors that can be elegantly closed with conservative direct bonding or bespoke porcelain veneers.'
        },
        {
          badge: 'Asymmetrical Gumlines',
          title: 'A "gummy" or uneven smile line',
          description: 'Excess gingival tissue covering natural enamel crowns that can be harmonized with gentle laser contouring.'
        }
      ]
    },
    detailedPhases: [
      {
        phase: 'Phase 01',
        title: 'Aesthetic Consultation & Digital Smile Preview',
        narrative: 'We capture high-definition macro photography and 3D intraoral digital scans. Together, we analyze your facial midline, canine guidance, and smile arc, allowing you to preview digital mockups on screen before committing.'
      },
      {
        phase: 'Phase 02',
        title: 'Micro-Preparation & Temporary Aesthetic Try-In',
        narrative: 'For veneers, conservative preparation (often just 0.3 to 0.5 mm of outer enamel) is performed under gentle local anesthesia. Temporary provisional restorations are fitted so you can road-test your new smile in daily conversation.'
      },
      {
        phase: 'Phase 03',
        title: 'Master Ceramic Bonding & Occlusal Finishing',
        narrative: 'Your custom hand-layered porcelain restorations are precision-checked for fit, contact tightness, and translucent light-scattering. Once approved by you, they are bonded permanently with high-strength resin cements.'
      }
    ],
    recoveryAndCare: {
      heading: 'Protecting Your Cosmetic Investment',
      paragraphs: [
        'Cosmetic restorations like porcelain veneers and composite bonding require no special downtime, but establishing mindful habits will preserve their luster and integrity for 15 to 20 years.',
        'We strongly advise avoiding using front teeth to rip open packaging, crack nuts, or bite fingernails. If you have a tendency to clench your teeth while sleeping, we craft a personalized clear nightguard to shield the ceramic margins from excessive bite forces.'
      ],
      tips: [
        'Stick to a non-abrasive fluoride gel toothpaste to avoid micro-scratching composite polish.',
        'Wear your custom nightguard faithfully if you grind your teeth at night.',
        'Schedule regular professional cleanings where hygienists use fine porcelain-safe polishing pastes.'
      ]
    },
    faqs: [
      {
        q: 'Will porcelain veneers look fake or overly bulky?',
        a: 'No. Modern hand-layered lithium disilicate (E.max) veneers are paper-thin and exhibit natural enamel-like translucency, mimicking internal tooth mamelons and optical refraction so they look organic in all lighting.'
      },
      {
        q: 'Does in-office teeth whitening hurt?',
        a: 'We use advanced desensitizing agents, calcium phosphate pretreatment, and controlled LED light wavelengths that dramatically reduce tooth sensitivity while lifting stains by 6 to 8 shades in a single 60-minute visit.'
      },
      {
        q: 'How long do direct composite bondings last compared to porcelain?',
        a: 'Composite bonding typically lasts 5 to 7 years before needing repolishing or touch-ups, whereas lab-fabricated porcelain veneers routinely last 15 to 20+ years with proper oral hygiene and regular checkups.'
      }
    ]
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    subtitle: 'Explore options for replacing missing teeth',
    h1Html: 'Explore <em>options for replacing missing teeth</em>',
    tagline: 'Personalized dental care',
    category: 'Restorative & Surgical',
    emoji: '🔩',
    shortDesc: 'Permanent titanium tooth root replacements with natural look, feel, and function.',
    intro: 'Dental implants are an established option for replacing missing teeth, designed to look and function naturally while preserving jawbone structure.',
    artLabel: 'Dental Implants · Care tailored to you',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    badgeLabel: 'Grade-4 Titanium & 3D Guided Osseointegration',
    features: [
      {
        step: '01 / ASSESS',
        title: 'Initial consultation',
        desc: 'Discuss your concerns, relevant history, and what you hope to achieve during your consultation.'
      },
      {
        step: '02 / PLAN',
        title: 'Bone health assessment',
        desc: 'Review suitable options, expected steps, alternatives, and any questions you may have.'
      },
      {
        step: '03 / CARE',
        title: 'Implant planning',
        desc: 'Understand follow-up, home-care guidance, and when to contact the clinic after treatment.'
      }
    ],
    procedures: [
      'Single Tooth Titanium Implants',
      'All-on-4 / Full Arch Fixed Restorations',
      '3D Cone Beam CT (CBCT) Bone Mapping',
      'Computer-Guided Surgical Stent Placement',
      'Sinus Lift & Bone Augmentation Grafts',
      'Custom Zirconia Abutments & Lifelike Crowns'
    ],
    duration: '60–90 minutes',
    specialistId: 'dr-carlos-tan',
    specialistName: 'Dr. Carlos Tan',
    specialistTitle: 'Implantologist & Periodontist',
    idealFor: 'Patients with one or more missing teeth, failing root canals, loose dentures, or seeking permanent tooth replacement.',
    note: 'Please note: This page provides general information only and is not a diagnosis or guarantee of a particular outcome. A licensed dental professional must determine whether a treatment is appropriate for you.',
    questionsTitle: 'Questions about dental implants?',
    questionsDesc: 'Send an appointment request and the clinic can discuss your concerns, available services, and the next steps with you.',
    overviewParagraphs: [
      'Dental implants represent the gold standard in modern tooth replacement biology. Unlike traditional bridges that require grinding down adjacent healthy teeth, or removable dentures that can slip and cause sore spots, dental implants replace both the missing tooth root and the visible crown.',
      'When a natural tooth is lost, the underlying alveolar jawbone no longer receives mechanical stimulation during chewing. Over time, the body resorbs this bone tissue, leading to sunken cheeks, premature facial aging, and shifting of neighboring teeth. A dental implant is constructed of biocompatible grade-4 titanium or zirconia that fuses directly with your living jawbone in a biological process termed osseointegration.',
      'Once integrated, the implant behaves exactly like a natural tooth root. It provides up to 95% of natural chewing force, allowing you to enjoy apples, steaks, and crunchy vegetables without hesitation. Topped with a custom-milled zirconia or porcelain crown, it matches the exact shade, texture, and contours of your surrounding teeth.'
    ],
    symptomsAndSigns: {
      heading: 'Who Is an Ideal Candidate for Implants?',
      intro: 'Implants are suitable for adult patients with mature jawbones seeking a permanent, non-removable solution:',
      items: [
        {
          badge: 'Single Missing Tooth',
          title: 'Lost tooth due to trauma, fracture, or decay',
          description: 'A single implant replaces the missing tooth independently without touching or damaging the enamel of adjacent teeth.'
        },
        {
          badge: 'Multiple Missing Teeth',
          title: 'Consecutive gaps in the posterior or anterior dental arch',
          description: 'Implant-supported bridges can replace 3 to 4 teeth using just two anchored implant fixtures, maximizing stability.'
        },
        {
          badge: 'Loose or Ill-Fitting Dentures',
          title: 'Dentures that slip, click, or cause painful gum sores',
          description: 'Full-arch All-on-4 or All-on-6 protocols secure a complete prosthetic arch permanently to your jawbone.'
        },
        {
          badge: 'Bone Preservation',
          title: 'Preventing jawbone collapse after recent extraction',
          description: 'Immediate or early implant placement prevents the rapid bone resorption that typically follows tooth loss.'
        }
      ]
    },
    detailedPhases: [
      {
        phase: 'Phase 01',
        title: '3D CBCT Imaging & Computerized Surgical Guide',
        narrative: 'We perform high-resolution Cone Beam Computed Tomography (CBCT) to measure bone depth, width, density, and nerve pathways down to the tenth of a millimeter. A 3D surgical guide is digitally printed for exact implant trajectory.'
      },
      {
        phase: 'Phase 02',
        title: 'Gentle Guided Placement & Osseointegration',
        narrative: 'Under local anesthesia or conscious sedation, the titanium implant is positioned with pinpoint precision. Over the next 8 to 12 weeks, bone cells weave tightly into the microscopic pores of the titanium fixture.'
      },
      {
        phase: 'Phase 03',
        title: 'Custom Abutment & Zirconia Crown Delivery',
        narrative: 'After healing is confirmed, an intraoral digital scan captures the implant position. A custom emergence-profile abutment and monolithic zirconia crown are torqued into place, completing your permanent restoration.'
      }
    ],
    recoveryAndCare: {
      heading: 'Healing Journey & Long-Term Prognosis',
      paragraphs: [
        'Most patients report surprisingly minimal discomfort following implant placement—often less than that of a routine tooth extraction. Over-the-counter pain relievers and a prescribed antiseptic rinse are typically all that is needed for the first 48 to 72 hours.',
        'With diligent oral hygiene, dental implants have a clinical success rate exceeding 95% to 98% and can last the rest of your life. While the titanium fixture and ceramic crown cannot get cavities, keeping the surrounding gum tissue clean is vital to prevent peri-implantitis.'
      ],
      tips: [
        'Eat a soft diet (soups, smoothies, soft pasta) for the first 3 to 5 days after surgery.',
        'Use an ultra-soft surgical toothbrush around the surgical site and avoid vigorous spitting.',
        'Utilize interdental brushes or a water flosser around the implant crown to keep gum pockets pristine.'
      ]
    },
    faqs: [
      {
        q: 'Is dental implant surgery painful?',
        a: 'The procedure is performed under profound local anesthesia, so you will feel no pain during surgery—only mild vibration and pressure. Post-operative soreness is generally mild and easily managed with standard pain medication for 2 to 3 days.'
      },
      {
        q: 'What if I have been missing a tooth for years and have lost bone?',
        a: 'Even if bone loss has occurred, modern bone grafting, sinus augmentation, and ridge preservation techniques can safely rebuild bone volume to create a rock-solid foundation for dental implants.'
      },
      {
        q: 'How long does the entire dental implant process take?',
        a: 'The full timeline typically spans 3 to 5 months. While bone fusion takes 8 to 12 weeks, we can often place an aesthetic temporary tooth on the very same day so you never leave our clinic with an empty gap.'
      }
    ]
  },
  {
    id: 'sedation-dentistry',
    title: 'Sedation Dentistry',
    subtitle: 'Dental care designed around your comfort',
    h1Html: 'Dental <em>care designed around your comfort</em>',
    tagline: 'Personalized dental care',
    category: 'Comfort & Specialized',
    emoji: '😴',
    shortDesc: 'Relaxation techniques and sedation options to ease anxiety during your appointments.',
    intro: 'If dental visits feel overwhelming, sedation dentistry can help you receive necessary care in a calmer, more comfortable environment.',
    artLabel: 'Sedation Dentistry · Care tailored to you',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    badgeLabel: 'Hospital-Grade Vitals Monitoring & Calm Suite',
    features: [
      {
        step: '01 / ASSESS',
        title: 'Anxiety evaluation',
        desc: 'Discuss your concerns, relevant history, and what you hope to achieve during your consultation.'
      },
      {
        step: '02 / PLAN',
        title: 'Sedation options',
        desc: 'Review suitable options, expected steps, alternatives, and any questions you may have.'
      },
      {
        step: '03 / CARE',
        title: 'Safety protocols',
        desc: 'Understand follow-up, home-care guidance, and when to contact the clinic after treatment.'
      }
    ],
    procedures: [
      'Inhalation Sedation (Nitrous Oxide / Laughing Gas)',
      'Oral Conscious Sedation (Prescription Anxiolysis)',
      'Intravenous (IV) Moderate Twilight Sedation',
      'Continuous Pulse Oximetry & Vitals Monitoring',
      'Sensory-Calm Suite with Noise-Cancelling Audio',
      'Multi-Treatment Consolidation in a Single Visit'
    ],
    duration: 'Varies with procedure',
    specialistId: 'dr-michael-chang',
    specialistName: 'Dr. Michael Chang',
    specialistTitle: 'Consultant Anesthesiologist',
    idealFor: 'Patients with dental phobia, severe gag reflex, low pain tolerance, or those undergoing extensive multi-procedure treatments.',
    note: 'Please note: This page provides general information only and is not a diagnosis or guarantee of a particular outcome. A licensed dental professional must determine whether a treatment is appropriate for you.',
    questionsTitle: 'Questions about sedation dentistry?',
    questionsDesc: 'Send an appointment request and the clinic can discuss your concerns, available services, and the next steps with you.',
    overviewParagraphs: [
      'Dental phobia and anxiety prevent millions of people from seeking the oral care they need, allowing minor dental problems to snowball into complex dental emergencies. Sedation dentistry is a compassionate, medically supervised discipline specifically engineered to dissolve fear, tension, and discomfort.',
      'Under sedation, you enter a deeply tranquil, dreamlike state of peaceful relaxation. While you remain conscious and able to respond to gentle questions, the sounds, smells, and sensations of the dental operatory fade harmlessly into the background. Time seems to pass in a matter of minutes, allowing our dental team to complete complex, multi-stage procedures in a single appointment.',
      'Patient safety is our uncompromising top priority. Every sedation session is preceded by a comprehensive review of your medical history, current prescriptions, and physiological profile. Throughout your treatment, your heart rate, blood pressure, oxygen saturation, and respiratory rhythm are continuously tracked on hospital-grade patient monitors by a dedicated sedation nurse or anesthesiologist.'
    ],
    symptomsAndSigns: {
      heading: 'Is Sedation Dentistry Right for You?',
      intro: 'Sedation is particularly recommended for patients experiencing any of the following obstacles to care:',
      items: [
        {
          badge: 'Severe Dental Anxiety',
          title: 'Intense dread or panic attacks when visiting the dentist',
          description: 'Past traumatic experiences or needle phobias that cause sleepless nights or avoidance of needed care.'
        },
        {
          badge: 'Hyperactive Gag Reflex',
          title: 'Difficulty tolerating mirrors, impression trays, or instruments',
          description: 'Sedation relaxes the pharyngeal reflexes, allowing smooth and effortless procedures without involuntary retching.'
        },
        {
          badge: 'Resistance to Numbing',
          title: 'Difficulty getting numb with local anesthesia alone',
          description: 'Elevated adrenaline from anxiety can counteract local numbing; sedation lowers stress hormones so anesthetics work profoundly.'
        },
        {
          badge: 'Extensive Dental Work',
          title: 'Need for multiple fillings, crowns, or surgical extractions',
          description: 'Allows our team to consolidate 3 to 4 appointments into one serene, restful session without patient fatigue.'
        }
      ]
    },
    detailedPhases: [
      {
        phase: 'Phase 01',
        title: 'Comprehensive Pre-Sedation Health Triage',
        narrative: 'We assess your medical history, allergies, and baseline vitals, and determine the optimal sedation modality—from mild nitrous oxide to oral sedation or IV twilight sedation.'
      },
      {
        phase: 'Phase 02',
        title: 'Tranquil Administration & Continuous Monitoring',
        narrative: 'In a dimmed, sound-insulated suite, sedation is gently initiated. Within moments, feelings of tension melt away into peaceful calm while medical monitors track your vitals throughout.'
      },
      {
        phase: 'Phase 03',
        title: 'Gentle Treatment & Escorted Recovery',
        narrative: 'Your dental treatments are completed smoothly while you rest. You transition to our quiet recovery room with warm blankets until your companion arrives to escort you home.'
      }
    ],
    recoveryAndCare: {
      heading: 'Sedation Recovery & Safety Rules',
      paragraphs: [
        'Nitrous oxide ("laughing gas") flushes out of your respiratory system within 5 minutes of breathing 100% pure oxygen at the end of the visit, meaning you can safely drive yourself home. For oral conscious and IV twilight sedation, the soothing effects linger for a few hours.',
        'For oral and IV sedation, you must have an adult companion drive you to the clinic and escort you home. You should plan on relaxing quietly for the remainder of the day, avoiding work emails, driving, or signing important documents.'
      ],
      tips: [
        'Fast from solid foods for 6 hours prior to oral or IV sedation (clear water permitted up to 2 hours prior).',
        'Wear loose, comfortable clothing with short sleeves to facilitate blood pressure cuff and pulse monitoring.',
        'Arrange for a trusted family member or friend to accompany you and stay with you for a few hours after the appointment.'
      ]
    },
    faqs: [
      {
        q: 'Will I be completely unconscious during sedation dentistry?',
        a: 'No. Sedation dentistry uses conscious and twilight sedation, meaning you breathe entirely on your own and can respond to verbal prompts, but you will feel deeply relaxed and will have little to no memory of the procedure.'
      },
      {
        q: 'Is sedation dentistry safe for older adults or patients with medical conditions?',
        a: 'Yes, when administered by qualified clinicians. We thoroughly review cardiovascular health, medications, and respiratory function to tailor the safest medication and dosage for your profile.'
      },
      {
        q: 'How quickly does nitrous oxide wear off after treatment?',
        a: 'Nitrous oxide is completely eliminated from the bloodstream within 3 to 5 minutes of breathing pure oxygen. You leave with full mental alertness and are legally cleared to drive yourself home.'
      }
    ]
  },
  {
    id: 'pedodontics',
    title: 'Pedodontics',
    subtitle: 'Nurturing young smiles with gentle care',
    h1Html: 'Nurturing <em>young smiles with gentle care</em>',
    tagline: 'Personalized dental care',
    category: 'Preventive Care',
    emoji: '🧸',
    shortDesc: 'Gentle, child-friendly dental care from first baby teeth through teenage years.',
    intro: 'Positive early dental experiences build healthy habits that last a lifetime. Our gentle team makes visits fun, informative, and comfortable.',
    artLabel: 'Pedodontics · Care tailored to you',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    badgeLabel: 'Tell-Show-Do Method & BPA-Free Enamel Shielding',
    features: [
      {
        step: '01 / ASSESS',
        title: 'Child-friendly checkup',
        desc: 'Discuss your concerns, relevant history, and what you hope to achieve during your consultation.'
      },
      {
        step: '02 / PLAN',
        title: 'Preventive treatments',
        desc: 'Review suitable options, expected steps, alternatives, and any questions you may have.'
      },
      {
        step: '03 / CARE',
        title: 'Habit & growth guidance',
        desc: 'Understand follow-up, home-care guidance, and when to contact the clinic after treatment.'
      }
    ],
    procedures: [
      'Infant & Toddler Oral Development Exams',
      'BPA-Free Pit & Fissure Cavity Sealants',
      'Gentle Prophylaxis Cleanings & Fluoride Varnish',
      'Tooth-Colored Pediatric Resin Restorations',
      'Space Maintainers for Premature Tooth Loss',
      'Habit Counseling (Thumb Sucking & Tongue Thrust)'
    ],
    duration: '30–45 minutes',
    specialistId: 'dr-anna-reyes',
    specialistName: 'Dr. Anna Reyes',
    specialistTitle: 'Pediatric Dental Specialist',
    idealFor: 'Infants, toddlers, school-age children, and teenagers needing preventive care, cavity defense, and positive dental experiences.',
    note: 'Please note: This page provides general information only and is not a diagnosis or guarantee of a particular outcome. A licensed dental professional must determine whether a treatment is appropriate for you.',
    questionsTitle: 'Questions about pediatric dentistry?',
    questionsDesc: 'Send an appointment request and the clinic can discuss your concerns, available services, and the next steps with you.',
    overviewParagraphs: [
      'Pedodontics—specialized pediatric dentistry—is dedicated to the oral health of infants, children, and adolescents. A child’s early impressions of dental care echo throughout their entire adult life. By combining specialized clinical techniques with positive behavioral psychology, we ensure every child associates dental visits with praise, comfort, and fun.',
      'Primary ("baby") teeth play an indispensable biological role that extends far beyond early chewing. They serve as natural space maintainers for the adult teeth growing beneath the gums, guide proper jawbone development, and are essential for clear speech articulation. Premature loss of baby teeth due to untreated decay frequently leads to severe crowding and complicated orthodontic issues later.',
      'Our pediatric team utilizes proven "Tell-Show-Do" behavioral techniques. We explain instruments using playful, non-threatening metaphors (like "Mr. Thirsty" for the suction straw and "Tooth Fairy camera" for digital scans). We also focus heavily on anticipatory guidance for parents—empowering families with practical knowledge on fluoride dosage, tooth-friendly nutrition, and gentle flossing routines.'
    ],
    symptomsAndSigns: {
      heading: 'When Should Your Child See a Pediatric Dentist?',
      intro: 'Both the American Academy of Pediatric Dentistry and global health organizations recommend scheduling early visits:',
      items: [
        {
          badge: 'First Birthday Milestone',
          title: 'First tooth eruption or by age one ("First visit by first tooth")',
          description: 'Early evaluation checks for proper eruption sequences, lip/tongue ties, and equips parents with infant oral hygiene habits.'
        },
        {
          badge: 'White Spots on Enamel',
          title: 'Chalky white streaks or dark pits along the gumline',
          description: 'Early demineralization indicates incipient cavities that can often be arrested with fluoride varnish without drilling.'
        },
        {
          badge: 'Prolonged Habits',
          title: 'Thumb sucking or pacifier use past age three',
          description: 'Persistent sucking habits can alter roof palate shape and cause anterior open bites, which benefit from gentle interceptive guidance.'
        },
        {
          badge: 'Toothache or Food Avoidance',
          title: 'Chewing on one side or refusing cold/sweet foods',
          description: 'Children often express dental pain through irritability, chewing avoidance, or difficulty sleeping rather than verbalizing toothaches.'
        }
      ]
    },
    detailedPhases: [
      {
        phase: 'Phase 01',
        title: 'Playful Acclimation & "Tell-Show-Do"',
        narrative: 'We welcome your child with curiosity-driven games, letting them touch our soft dental mirrors and count their teeth with the dentist in a relaxed, pressure-free environment.'
      },
      {
        phase: 'Phase 02',
        title: 'Gentle Examination & Enamel Shielding',
        narrative: 'We clean plaque gently with delicious bubblegum or berry-flavored paste, apply BPA-free pit & fissure sealants to deep molar grooves, and brush on protective fluoride varnish.'
      },
      {
        phase: 'Phase 03',
        title: 'Parent Partnership & Treasure Reward',
        narrative: 'We review brushing techniques with parents, answer questions regarding tooth eruption or snacking habits, and reward your brave child with high-fives and a prize from our treasure chest.'
      }
    ],
    recoveryAndCare: {
      heading: 'Home Oral Hygiene for Growing Smiles',
      paragraphs: [
        'Following a fluoride varnish treatment, your child should eat soft foods and avoid hot liquids or crunchy snacks for 4 to 6 hours so the remineralizing varnish stays bonded to the enamel.',
        'Parents should assist or supervise tooth brushing until approximately age 7 or 8, when children develop the fine motor coordination required to tie their own shoelaces and thoroughly clean posterior molars.'
      ],
      tips: [
        'Use a smear of fluoride toothpaste (rice-grain size) for children under 3; a pea-sized amount for ages 3 to 6.',
        'Avoid bedtime bottles containing milk or juice, which cause rapid "baby bottle tooth decay".',
        'Celebrate brushing with 2-minute timer songs or interactive brushing apps.'
      ]
    },
    faqs: [
      {
        q: 'Why fix a baby tooth if it is going to fall out anyway?',
        a: 'Baby molars remain in your child’s mouth until ages 10 to 12. If a decayed baby tooth is left untreated, infection can spread to the developing permanent tooth underneath, cause severe pain, and disrupt orthodontic alignment.'
      },
      {
        q: 'What are dental sealants, and do they hurt?',
        a: 'Dental sealants are thin, protective resin coatings painted into the deep chewing grooves of permanent molars. The application is completely painless, requires zero drilling or numbing, and reduces cavity risk by up to 80%.'
      },
      {
        q: 'How do you handle a child who is very frightened of the dentist?',
        a: 'Our team is trained in pediatric psychology and desensitization. We take things at your child’s pace, never force treatments, offer comforting nitrous oxide if needed, and turn every visit into an empowering, fun game.'
      }
    ]
  },
  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    subtitle: 'Advanced precision with minimal discomfort',
    h1Html: 'Advanced <em>precision with minimal discomfort</em>',
    tagline: 'Personalized dental care',
    category: 'Comfort & Specialized',
    emoji: '⚡',
    shortDesc: 'Minimally invasive laser treatments for gums, ulcers, and restorative procedures.',
    intro: 'Modern dental lasers offer greater precision, less bleeding, and faster healing for a variety of gum and soft-tissue treatments.',
    artLabel: 'Laser Dentistry · Care tailored to you',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    badgeLabel: 'Photonic Soft-Tissue Diode & Zero-Suture Healing',
    features: [
      {
        step: '01 / ASSESS',
        title: 'Tissue assessment',
        desc: 'Discuss your concerns, relevant history, and what you hope to achieve during your consultation.'
      },
      {
        step: '02 / PLAN',
        title: 'Laser wavelength selection',
        desc: 'Review suitable options, expected steps, alternatives, and any questions you may have.'
      },
      {
        step: '03 / CARE',
        title: 'Fast-healing recovery',
        desc: 'Understand follow-up, home-care guidance, and when to contact the clinic after treatment.'
      }
    ],
    procedures: [
      'Gingival Contouring & Gummy Smile Correction',
      'Minimally Invasive Frenectomy (Tongue-Tie Release)',
      'Aphthous Ulcer & Canker Sore Pain Neutralization',
      'Subgingival Periodontal Pocket Decontamination',
      'Laser-Assisted Teeth Whitening Activation',
      'Cold Sore (Herpes Labialis) Photobiomodulation'
    ],
    duration: '30–60 minutes',
    specialistId: 'dr-elena-vargas',
    specialistName: 'Dr. Elena Vargas',
    specialistTitle: 'Laser Dental Surgeon',
    idealFor: 'Patients seeking painless gum re-shaping, ulcer relief, frenum release, or faster periodontal pocket healing without scalpels.',
    note: 'Please note: This page provides general information only and is not a diagnosis or guarantee of a particular outcome. A licensed dental professional must determine whether a treatment is appropriate for you.',
    questionsTitle: 'Questions about laser dentistry?',
    questionsDesc: 'Send an appointment request and the clinic can discuss your concerns, available services, and the next steps with you.',
    overviewParagraphs: [
      'Laser dentistry represents one of the most remarkable breakthroughs in modern clinical practice. By concentrating specific wavelengths of energized light into an ultra-precise optical beam, dental lasers can sculpt soft tissues, eliminate pathogenic bacteria, and stimulate cellular regeneration with microscopic accuracy.',
      'Traditional surgical scalpels cause mechanical tissue trauma, bleeding, and necessitate stitches that can be tender during recovery. In contrast, dental diode lasers instantly vaporize excess tissue while simultaneously cauterizing micro-capillaries and nerve endings. This results in virtually bloodless procedures, vastly reduced post-operative swelling, and immediate sterilization of the treatment zone.',
      'Beyond soft tissue sculpting, lasers deliver a therapeutic effect known as photobiomodulation (low-level laser therapy). The photon energy stimulates mitochondrial ATP production in surrounding fibroblasts, accelerating collagen synthesis and speeding up natural tissue healing by up to 50%.'
    ],
    symptomsAndSigns: {
      heading: 'Conditions Effectively Treated by Laser Therapy',
      intro: 'Laser dentistry delivers unmatched comfort and precision for a wide array of oral conditions:',
      items: [
        {
          badge: 'Gummy Smile',
          title: 'Excessive or asymmetrical gum tissue covering front teeth',
          description: 'Lasers reshape the gingival margin in minutes with micro-millimeter precision, unveiling full, shapely tooth crowns.'
        },
        {
          badge: 'Tongue-Tie / Lip-Tie',
          title: 'Tight frenum restricting tongue mobility or speech in kids & adults',
          description: 'A 2-minute laser frenectomy releases the tight connective band without scalpels, bleeding, or sutures.'
        },
        {
          badge: 'Painful Canker Sores',
          title: 'Stinging aphthous ulcers or cold sores that make eating agonizing',
          description: 'A 60-second low-power laser pass seals exposed nerve endings, providing immediate pain relief and halving healing time.'
        },
        {
          badge: 'Deep Gum Pockets',
          title: 'Chronic bacterial colonization in periodontal pockets',
          description: 'Laser energy selectively targets and eliminates pigmented periodontopathogenic bacteria without harming healthy connective tissue.'
        }
      ]
    },
    detailedPhases: [
      {
        phase: 'Phase 01',
        title: 'Diagnostic Digital Mapping & Wavelength Calibration',
        narrative: 'We inspect the soft tissue architecture and select the exact laser wavelength and pulse frequency suited for your tissue biotype, ensuring maximum efficacy and total tissue safety.'
      },
      {
        phase: 'Phase 02',
        title: 'Focused Photonic Treatment with Topical Gel',
        narrative: 'Because the laser instantly seals microscopic nerve endings, most treatments require only a light topical anesthetic gel rather than needle injections. You feel only a mild sensation of gentle warmth.'
      },
      {
        phase: 'Phase 03',
        title: 'Immediate Hemostasis & Bio-Stimulation Finish',
        narrative: 'The surgical zone is checked for perfect symmetry. Because bleeding is instantly arrested at the cellular level, no sutures are required, and you leave with zero open wounds.'
      }
    ],
    recoveryAndCare: {
      heading: 'Recovery & Post-Laser Care',
      paragraphs: [
        'Post-operative recovery following dental laser procedures is exceptionally fast and comfortable. Most patients require zero pain medication and can resume normal speaking and working immediately.',
        'For the first 48 hours following gum contouring or frenectomy, avoid spicy, acidic (citrus/vinegar), or crunchy foods that could physically irritate the delicate healing margin.'
      ],
      tips: [
        'Rinse gently with warm salt water after meals starting 24 hours post-procedure.',
        'Brush carefully around the treated gumline with an extra-soft manual toothbrush.',
        'Resume your regular gym workouts and social activities on the very same day.'
      ]
    },
    faqs: [
      {
        q: 'Does dental laser treatment hurt during or after the procedure?',
        a: 'No. The laser beam vaporizes tissue so rapidly that heat does not transfer to surrounding nerve fibers. Most patients only experience mild warmth. After the procedure, soreness is minimal compared to conventional blade surgery.'
      },
      {
        q: 'Will my gums grow back after laser gummy smile contouring?',
        a: 'When performed properly by an experienced clinician who respects the biological width of bone and connective tissue attachment, laser gingival recontouring results are permanent and stable.'
      },
      {
        q: 'Is laser dentistry safe for pregnant patients or children?',
        a: 'Yes. Dental lasers utilize non-ionizing light waves (unlike X-rays) and do not penetrate beyond the surface layer of tissue, making them exceptionally safe for all age groups.'
      }
    ]
  },
  {
    id: 'periodontics',
    title: 'Periodontics',
    subtitle: 'Protecting the foundation of your teeth',
    h1Html: 'Protecting the <em>foundation of your teeth</em>',
    tagline: 'Personalized dental care',
    category: 'Restorative & Surgical',
    emoji: '🩺',
    shortDesc: 'Comprehensive gum health assessments, deep scaling, and periodontal maintenance.',
    intro: 'Healthy gums support strong teeth. Our periodontal treatments address inflammation, bone loss, and gum recession before they progress.',
    artLabel: 'Periodontics · Care tailored to you',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    badgeLabel: 'Subgingival Ultrasonic SRP & Pocket Decontamination',
    features: [
      {
        step: '01 / ASSESS',
        title: 'Periodontal probing',
        desc: 'Discuss your concerns, relevant history, and what you hope to achieve during your consultation.'
      },
      {
        step: '02 / PLAN',
        title: 'Deep cleaning plan',
        desc: 'Review suitable options, expected steps, alternatives, and any questions you may have.'
      },
      {
        step: '03 / CARE',
        title: 'Maintenance intervals',
        desc: 'Understand follow-up, home-care guidance, and when to contact the clinic after treatment.'
      }
    ],
    procedures: [
      'Comprehensive 6-Point Periodontal Pocket Depth Charting',
      'Scaling and Root Planing (Subgingival Deep Debridement)',
      'Locally Administered Antimicrobial Microspheres (Arestin)',
      'Gingival Grafting for Severe Root Recession',
      'Crown Lengthening & Biological Width Restoration',
      'Targeted Periodontal Maintenance Therapy'
    ],
    duration: '45–75 minutes',
    specialistId: 'dr-carlos-tan',
    specialistName: 'Dr. Carlos Tan',
    specialistTitle: 'Periodontist & Dental Surgeon',
    idealFor: 'Patients experiencing bleeding gums, periodontal pockets exceeding 4mm, receding gums, persistent bad breath, or loose teeth.',
    note: 'Please note: This page provides general information only and is not a diagnosis or guarantee of a particular outcome. A licensed dental professional must determine whether a treatment is appropriate for you.',
    questionsTitle: 'Questions about gum health?',
    questionsDesc: 'Send an appointment request and the clinic can discuss your concerns, available services, and the next steps with you.',
    overviewParagraphs: [
      'Periodontics focuses on the periodontium—the intricate living architecture of gums, periodontal ligaments, and alveolar bone that anchors your teeth into the jaw. While enamel decay is common, periodontal disease is actually the single leading cause of adult tooth loss worldwide.',
      'Gum disease begins quietly as gingivitis: bacterial plaque accumulates at the gum margin, triggering swelling and bleeding during brushing. If left unmanaged, anaerobic bacteria migrate down root surfaces, releasing endotoxins that provoke a chronic immune response. This systemic inflammatory reaction breaks down the jawbone supporting your teeth, creating deep, inaccessible pockets where bacteria multiply unchecked.',
      'Furthermore, extensive medical research confirms a direct bidirectional link between chronic periodontal disease and systemic health disorders—including cardiovascular disease, arterial plaque formation, diabetic complications, and adverse pregnancy outcomes. Periodontal therapy not only preserves your smile; it protects your whole-body vascular health.'
    ],
    symptomsAndSigns: {
      heading: 'Critical Warning Signs of Periodontal Disease',
      intro: 'Periodontal disease is often painless in its early stages. Watch for these telltale signs:',
      items: [
        {
          badge: 'Bleeding When Flossing',
          title: 'Gums bleed readily upon brushing or flossing',
          description: 'Healthy gums never bleed. Bleeding indicates active micro-ulcerations in the epithelial lining of the gum pocket.'
        },
        {
          badge: 'Receding Gumlines',
          title: 'Teeth appear visibly longer, or yellow roots become visible',
          description: 'Gum tissue and bone are receding away from bacterial toxins, exposing sensitive cementum vulnerable to root decay.'
        },
        {
          badge: 'Persistent Bad Breath',
          title: 'Chronic bad breath or unpleasant metallic taste in mouth',
          description: 'Deep subgingival pockets trap colonies of anaerobic bacteria producing foul-smelling sulfur compounds.'
        },
        {
          badge: 'Loose or Shifting Teeth',
          title: 'Teeth feel slightly mobile or bite alignment feels different',
          description: 'Indicates advanced bone loss around tooth roots that requires urgent periodontal intervention to prevent tooth loss.'
        }
      ]
    },
    detailedPhases: [
      {
        phase: 'Phase 01',
        title: 'Full-Mouth 6-Point Periodontal Pocket Charting',
        narrative: 'Using a calibrated periodontal probe, we record pocket depths at 6 sites per tooth. Healthy gums measure 1 to 3 mm; pockets measuring 4 mm or deeper indicate active periodontitis requiring therapeutic debridement.'
      },
      {
        phase: 'Phase 02',
        title: 'Ultrasonic Subgingival Scaling & Root Planing (SRP)',
        narrative: 'Under comfortable local anesthesia, specialized micro-ultrasonic tips navigate below the gumline to dislodge stubborn calculus, smooth rough root cementum, and flush out bacterial colonies with antiseptic irrigation.'
      },
      {
        phase: 'Phase 03',
        title: 'Targeted Antimicrobial Therapy & Re-Evaluation',
        narrative: 'Time-release antibiotic microspheres are placed directly into deep pockets to suppress residual bacteria. At a 6-week re-evaluation, we remeasure pocket depths to confirm tissue tightening and pocket reduction.'
      }
    ],
    recoveryAndCare: {
      heading: 'Periodontal Maintenance & Daily Care',
      paragraphs: [
        'Following deep scaling, gums may feel mildly tender and teeth may experience temporary temperature sensitivity for 2 to 3 days as inflammation subsides and tissues shrink back firmly against the roots.',
        'Because periodontitis is a chronic condition, maintaining gains requires establishing a dedicated 3- to 4-month periodontal maintenance cleaning schedule rather than standard 6-month checkups, stopping pathogenic bacterial repopulation in its tracks.'
      ],
      tips: [
        'Incorporate interdental brushes (sized specifically for your interdental spaces) or a water flosser daily.',
        'Avoid tobacco and vaping products, which constrict gingival blood vessels and mask bleeding signs while worsening bone loss.',
        'Attend scheduled 3- to 4-month periodontal maintenance cleanings to keep pockets stable.'
      ]
    },
    faqs: [
      {
        q: 'Can periodontal bone loss be reversed?',
        a: 'While bone lost to periodontitis generally cannot regrow naturally, scaling and root planing halts ongoing destruction. In specific localized defects, advanced bone grafting and guided tissue regeneration (GTR) can restore lost bone height.'
      },
      {
        q: 'Why does my dentist recommend cleanings every 3 months instead of 6?',
        a: 'Clinical studies prove that in patients with a history of periodontitis, virulent anaerobic bacteria repopulate pockets within 90 days. A 3-month maintenance interval interrupts this bacterial cycle before bone destruction can resume.'
      },
      {
        q: 'Is scaling and root planing painful?',
        a: 'No. We thoroughly numb the gums and tooth roots with topical and local anesthetics before beginning. Most patients report feeling only gentle pressure and water spray throughout the appointment.'
      }
    ]
  },
  {
    id: 'tmjd-treatment',
    title: 'TMJD Treatment',
    subtitle: 'Relief for jaw pain, clicking, and headaches',
    h1Html: 'Relief for <em>jaw pain, clicking, and headaches</em>',
    tagline: 'Personalized dental care',
    category: 'Comfort & Specialized',
    emoji: '💆',
    shortDesc: 'Diagnosing and treating temporomandibular joint issues and chronic facial tension.',
    intro: 'Jaw clicking, facial soreness, and tension headaches may stem from your temporomandibular joints. We focus on conservative, non-invasive relief.',
    artLabel: 'TMJD Treatment · Care tailored to you',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    badgeLabel: '3D Orthopedic Splint & Musculoskeletal Relief',
    features: [
      {
        step: '01 / ASSESS',
        title: 'Joint & muscle exam',
        desc: 'Discuss your concerns, relevant history, and what you hope to achieve during your consultation.'
      },
      {
        step: '02 / PLAN',
        title: 'Occlusal analysis',
        desc: 'Review suitable options, expected steps, alternatives, and any questions you may have.'
      },
      {
        step: '03 / CARE',
        title: 'Custom splint therapy',
        desc: 'Understand follow-up, home-care guidance, and when to contact the clinic after treatment.'
      }
    ],
    procedures: [
      'Comprehensive TMJ Range-of-Motion & Joint Palpation',
      'Computerized Bite Analysis & Occlusal Calibration',
      'Custom-Fabricated Precision Nightguard / Splint Therapy',
      'Therapeutic Masseter & Temporalis Muscle De-Programming',
      'Trigger Point Photobiomodulation & Low-Level Laser Therapy',
      'Postural Ergonomics & Jaw Physical Therapy Protocols'
    ],
    duration: '45–60 minutes',
    specialistId: 'dr-elena-vargas',
    specialistName: 'Dr. Elena Vargas',
    specialistTitle: 'TMJ & Orofacial Pain Specialist',
    idealFor: 'Patients suffering from morning jaw soreness, jaw popping or clicking, nocturnal teeth grinding, locked jaw, or persistent temporal headaches.',
    note: 'Please note: This page provides general information only and is not a diagnosis or guarantee of a particular outcome. A licensed dental professional must determine whether a treatment is appropriate for you.',
    questionsTitle: 'Questions about jaw pain?',
    questionsDesc: 'Send an appointment request and the clinic can discuss your concerns, available services, and the next steps with you.',
    overviewParagraphs: [
      'The temporomandibular joints (TMJs) are among the most intricate and frequently used joints in the human body, connecting your lower jaw (mandible) to the temporal bones of your skull. Every time you speak, chew, swallow, or yawn, these bilateral hinge-and-gliding joints work in precise coordination with powerful facial muscles.',
      'Temporomandibular Joint Disorder (TMJD) arises when the delicate articular disc between the joint bones becomes displaced, or when hyperactive masticatory muscles (masseter and temporalis) enter a state of chronic spasm. This is frequently exacerbated by nocturnal bruxism (clenching and grinding teeth during sleep), daytime stress, postural strain from computer work, or misaligned dental bites.',
      'Many patients suffer for years with debilitating symptoms—such as unexplained morning migraines, neck stiffness, and ear fullness—without realizing the root cause lies in their jaw mechanics. Our philosophy focuses on conservative, non-surgical, reversible rehabilitation designed to decompress the joint, relax spasming muscles, and restore pain-free jaw mobility.'
    ],
    symptomsAndSigns: {
      heading: 'Common Indicators of TMJ Dysfunction',
      intro: 'If you experience two or more of the following symptoms, a specialized TMJ evaluation is recommended:',
      items: [
        {
          badge: 'Jaw Clicking & Popping',
          title: 'Audible clicks, pops, or gravelly grating noises when opening wide',
          description: 'Indicates the protective fibrocartilage disc inside the joint is slipping out of alignment during jaw movement.'
        },
        {
          badge: 'Morning Temple Headaches',
          title: 'Waking up with dull tension headaches or sore facial muscles',
          description: 'Caused by nocturnal clenching exerting hundreds of pounds of continuous pressure on the temporalis muscle all night.'
        },
        {
          badge: 'Restricted Jaw Opening',
          title: 'Jaw catches, locks momentarily, or cannot open wide comfortably',
          description: 'A displaced disc physically obstructing the smooth gliding path of the mandibular condyle.'
        },
        {
          badge: 'Ear Fullness & Tinnitus',
          title: 'A sensation of stuffed ears, ringing, or deep earache without ear infection',
          description: 'The TMJ sits directly adjacent to the ear canal and shares nerve innervation pathways with the middle ear.'
        }
      ]
    },
    detailedPhases: [
      {
        phase: 'Phase 01',
        title: 'Masticatory Muscle Palpation & Joint Doppler Assessment',
        narrative: 'We systematically palpate 12 head and neck muscle groups to map trigger points, measure maximum comfortable mouth opening in millimeters, and listen to joint translation mechanics.'
      },
      {
        phase: 'Phase 02',
        title: '3D Digital Bite Registration & Splint Design',
        narrative: 'We record your dynamic jaw path using 3D digital impressions. We design a custom hard acrylic occlusal splint that positions your condyles in their biologically ideal, relaxed orthopedic position.'
      },
      {
        phase: 'Phase 03',
        title: 'Precision Fitting & Musculoskeletal Rehabilitation',
        narrative: 'Your splint is calibrated with micro-marking papers to ensure even, balanced bite contact. We prescribe targeted jaw exercises, warm moist heat therapy, and sleep posture adjustments.'
      }
    ],
    recoveryAndCare: {
      heading: 'Daily TMJ Care & Long-Term Relief',
      paragraphs: [
        'Most patients experience substantial relief from muscle soreness and headaches within 10 to 14 days of consistent nightguard wear as hyperactive muscles finally unlearn their nocturnal spasm patterns.',
        'During initial flare-ups, give your jaw a "vacation": stick to softer foods that do not require wide opening or vigorous chewing, and avoid chewing gum or resting your chin in your hands during desk work.'
      ],
      tips: [
        'Practice the "lips together, teeth apart" posture during waking hours to avoid subconscious daytime clenching.',
        'Wear your custom orthotic splint nightly and bring it to routine checkups for occlusal micro-adjustments.',
        'Apply moist heat packs over the masseter muscles for 10 minutes before bed to promote deep muscle relaxation.'
      ]
    },
    faqs: [
      {
        q: 'Will a drugstore over-the-counter nightguard work for TMJ pain?',
        a: 'No. Soft, boil-and-bite drugstore nightguards act like chewing gum, stimulating jaw muscles to clench harder at night and often worsening TMJ joint compression. A clinical TMJ splint must be rigid and custom-balanced to decompress the joint.'
      },
      {
        q: 'Does TMJD always require surgery?',
        a: 'Rarely. Over 90% of TMJ patients achieve complete symptom resolution through conservative, non-invasive therapies such as custom splints, bite balancing, stress management, and low-level laser therapy.'
      },
      {
        q: 'Can misaligned teeth cause TMJ disorders?',
        a: 'Yes. An uneven bite or premature tooth contact can force the jaw joints into an unnatural, strained position every time you close your mouth, leading to chronic muscle fatigue and joint strain.'
      }
    ]
  },
  {
    id: 'endodontics',
    title: 'Endodontics',
    subtitle: 'Saving teeth, relieving pain',
    h1Html: 'Saving teeth, <em>relieving pain</em>',
    tagline: 'Personalized dental care',
    category: 'Restorative & Surgical',
    emoji: '🔬',
    shortDesc: 'Gentle, modern root canal therapy to eliminate infection and preserve your natural tooth.',
    intro: 'Endodontic treatment saves teeth that would otherwise need extraction. Modern techniques make the procedure gentle, comfortable, and predictable.',
    artLabel: 'Endodontics · Care tailored to you',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    badgeLabel: '20x Surgical Microscope & 3D Bioceramic Seal',
    features: [
      {
        step: '01 / ASSESS',
        title: 'Diagnostic testing',
        desc: 'Discuss your concerns, relevant history, and what you hope to achieve during your consultation.'
      },
      {
        step: '02 / PLAN',
        title: 'Root canal procedure',
        desc: 'Review suitable options, expected steps, alternatives, and any questions you may have.'
      },
      {
        step: '03 / CARE',
        title: 'Restoration & protection',
        desc: 'Understand follow-up, home-care guidance, and when to contact the clinic after treatment.'
      }
    ],
    procedures: [
      'Digital Thermal & Electric Pulp Vitality Testing',
      'High-Magnification Surgical Operating Microscope Imaging',
      'Rotary Nickel-Titanium Canal Shaping & Debridement',
      'Ultrasonic & Negative-Pressure Canal Disinfection',
      'Hermetic 3D Biocompatible Gutta-Percha Obturation',
      'Full-Coverage Ceramic Crown Protective Restoration'
    ],
    duration: '60–90 minutes',
    specialistId: 'dr-michael-chang',
    specialistName: 'Dr. Michael Chang',
    specialistTitle: 'Endodontic Specialist',
    idealFor: 'Patients experiencing severe throbbing toothache, lingering hot/cold pain, deep cavities reaching the pulp, or root abscesses.',
    note: 'Please note: This page provides general information only and is not a diagnosis or guarantee of a particular outcome. A licensed dental professional must determine whether a treatment is appropriate for you.',
    questionsTitle: 'Questions about root canals?',
    questionsDesc: 'Send an appointment request and the clinic can discuss your concerns, available services, and the next steps with you.',
    overviewParagraphs: [
      'Endodontics is the specialized dental discipline devoted to treating the dental pulp—the living core inside your tooth composed of blood vessels, connective tissues, and sensory nerves. While popular mythology portrays root canal therapy as painful, the reality is the exact opposite: root canal therapy does not cause pain; it permanently cures it.',
      'When deep dental decay, cracks in the enamel, or physical dental trauma allow oral bacteria to breach the pulp chamber, the pulp tissue becomes acutely inflamed (pulpitis) and eventually necrotic. Because the pulp is enclosed within rigid dentin walls, internal pressure builds rapidly, triggering severe throbbing pain. If left untreated, the infection travels down the root tips into the surrounding jawbone, forming painful apical abscesses.',
      'Our endodontic specialists utilize high-powered surgical operating microscopes with up to 20x magnification and fiber-optic illumination. This technology allows us to locate micro-calcified canals, hidden secondary branches, and anatomical variations that would be invisible to the naked eye, ensuring 100% thorough disinfection and saving natural teeth that would otherwise face permanent extraction.'
    ],
    symptomsAndSigns: {
      heading: 'Symptoms Requiring Endodontic Evaluation',
      intro: 'Contact our clinic immediately if you experience any of the following symptoms of pulp infection:',
      items: [
        {
          badge: 'Lingering Thermal Pain',
          title: 'Sharp sensitivity to hot coffee or cold water that lingers for 30+ seconds',
          description: 'A hallmark indicator of irreversible pulpitis, meaning the nerve is actively dying and cannot heal on its own.'
        },
        {
          badge: 'Spontaneous Throbbing',
          title: 'Pulsing toothache that awakens you at night or strikes without triggers',
          description: 'Indicates high fluid pressure built up inside the enclosed pulp chamber requiring urgent decompression.'
        },
        {
          badge: 'Pain When Chewing',
          title: 'Sharp discomfort when biting down or tapping the tooth',
          description: 'Bacterial inflammation has escaped past the root apex into the surrounding periodontal ligament fibers.'
        },
        {
          badge: 'Gum Pimple / Fistula',
          title: 'Small pimple-like bump on the gums leaking fluid or pus',
          description: 'A drainage fistula formed by an abscessed tooth root, which releases pressure but requires immediate canal disinfection.'
        }
      ]
    },
    detailedPhases: [
      {
        phase: 'Phase 01',
        title: 'Profound Anesthesia & Rubber Dam Isolation',
        narrative: 'We ensure 100% numbness using targeted local anesthesia and buffering techniques. A sterile rubber dam isolator is placed over the tooth to keep it completely dry and shielded from oral bacteria.'
      },
      {
        phase: 'Phase 02',
        title: 'Microscopic Rotary Debridement & Ultrasonic Flush',
        narrative: 'Under our surgical microscope, ultra-flexible nickel-titanium rotary files gently clean and shape the micro-canals. Ultrasonic irrigants circulate through every microscopic canal fin to dissolve all bacterial biofilm.'
      },
      {
        phase: 'Phase 03',
        title: '3D Biocompatible Hermetic Seal & Crown Shielding',
        narrative: 'The sanitized canals are sealed three-dimensionally with biocompatible gutta-percha and bioceramic sealer to prevent reinfection. The tooth is then restored with a high-strength crown to prevent future fracture.'
      }
    ],
    recoveryAndCare: {
      heading: 'What to Expect After a Root Canal',
      paragraphs: [
        'The moment the infected nerve tissue is removed, the severe throbbing toothache disappears. It is normal for the tooth to feel slightly tender to bite on for 2 to 4 days as surrounding bone tissues heal.',
        'Because a tooth without a living pulp loses internal moisture and becomes more brittle over time, it is essential to place a full-coverage protective crown to withstand normal chewing forces for decades to come.'
      ],
      tips: [
        'Avoid chewing hard foods on the treated side until your permanent protective crown is placed.',
        'Take recommended ibuprofen or acetaminophen as directed to calm post-treatment ligament tenderness.',
        'Brush and floss normally around the treated tooth—a root-treated tooth cannot get nerve pain again, but still needs plaque defense.'
      ]
    },
    faqs: [
      {
        q: 'Is root canal therapy painful?',
        a: 'With modern local anesthetics and microscopic instruments, root canal therapy is no more uncomfortable than receiving a standard dental filling. Most patients feel profound relief immediately after treatment.'
      },
      {
        q: 'Why not just pull the tooth instead of getting a root canal?',
        a: 'Preserving your natural tooth is always the biological ideal. Extracting a tooth requires expensive replacements (implants or bridges) to keep adjacent teeth from tipping and maintain chewing ability. A treated root canal tooth can last a lifetime.'
      },
      {
        q: 'How many visits does an endodontic treatment require?',
        a: 'Thanks to modern rotary systems and digital imaging, most root canal treatments are completed comfortably in a single 60- to 90-minute appointment. Severe infections may require a brief second visit with medicated antibacterial dressing.'
      }
    ]
  }
];

export const serviceSpecialists = [
  {
    id: 'dr-anna-reyes',
    name: 'Dr. Anna Reyes',
    role: 'General & Pediatric Dental Director',
    badge: '14+ Years Experience',
    avatarEmoji: '👩‍⚕️',
    bio: 'Specializing in preventive family dentistry and child-centered care with a passion for painless clinical procedures.',
    education: 'DMD - University of the Philippines, Pediatric Residency at PGH',
    specialties: ['General Dentistry', 'Pedodontics', 'Preventive Prophylaxis']
  },
  {
    id: 'dr-maria-santos',
    name: 'Dr. Maria Santos',
    role: 'Head of Aesthetic Dentistry',
    badge: 'AACD Accredited Fellow',
    avatarEmoji: '✨',
    bio: 'Celebrated for transformative smile design, ultra-thin porcelain veneers, and conservative biomimetic restorations.',
    education: 'DMD - UST Faculty of Medicine & Surgery, Aesthetic Fellowship at UCLA',
    specialties: ['Cosmetic Dentistry', 'Porcelain Veneers', 'Digital Smile Design']
  },
  {
    id: 'dr-carlos-tan',
    name: 'Dr. Carlos Tan',
    role: 'Chief Implantologist & Periodontist',
    badge: 'ICOI Diplomate',
    avatarEmoji: '👨‍⚕️',
    bio: 'Pioneer in computer-guided 3D implant surgery, immediate full-arch restorations, and minimally invasive gum grafting.',
    education: 'DMD - CEU Manila, Postgrad Periodontology at King’s College London',
    specialties: ['Dental Implants', 'Periodontics', 'Bone Grafting']
  },
  {
    id: 'dr-michael-chang',
    name: 'Dr. Michael Chang',
    role: 'Endodontist & Sedation Specialist',
    badge: 'AAE Member Specialist',
    avatarEmoji: '🔬',
    bio: 'Dedicated to microscopic root canal therapies, painless single-visit treatments, and hospital-grade conscious sedation.',
    education: 'DMD - University of the East, Endodontic Specialty at NYU College of Dentistry',
    specialties: ['Endodontics', 'Sedation Dentistry', 'Microscopic Surgery']
  },
  {
    id: 'dr-elena-vargas',
    name: 'Dr. Elena Vargas',
    role: 'Laser Surgeon & TMJ Specialist',
    badge: 'WCLI Master Fellow',
    avatarEmoji: '⚡',
    bio: 'Expert in soft-tissue photonic laser therapy, orofacial pain management, and non-surgical TMJ rehabilitation.',
    education: 'DMD - UP Manila, Fellowship in Orofacial Pain at Rutgers School of Dental Medicine',
    specialties: ['Laser Dentistry', 'TMJD Treatment', 'Orofacial Pain']
  }
];

export const getServiceById = (id: string): ServiceItem | undefined => {
  return servicesData.find(s => s.id === id);
};

export const getSpecialistById = (id: string) => {
  return serviceSpecialists.find(s => s.id === id);
};

