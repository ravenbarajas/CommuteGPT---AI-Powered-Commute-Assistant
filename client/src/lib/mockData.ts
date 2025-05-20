export interface RouteStep {
  icon: string;
  text: string;
}

export interface RouteResponse {
  title: string;
  steps: RouteStep[];
  cost: string;
  time: string;
  additionalInfo: string;
}

export const mockResponses: Record<string, RouteResponse> = {
  'cubao to makati': {
    title: 'Cubao to Makati Route',
    steps: [
      { icon: '🚶', text: 'Walk to MRT Cubao Station (5 mins)' },
      { icon: '🚆', text: 'Take MRT southbound to Ayala Station (25 mins)' },
      { icon: '🚶', text: 'Walk to your destination in Makati (5-10 mins)' }
    ],
    cost: '₱30',
    time: '~40 mins total',
    additionalInfo: 'Alternatively, you could take a bus from Cubao to Ayala Avenue, but the MRT is usually faster during rush hours. Would you like more details about any specific part of this journey?'
  },
  'divisoria': {
    title: 'Budget Route to Divisoria',
    steps: [
      { icon: '🚍', text: 'Take jeepney from Cubao to Quiapo (₱11)' },
      { icon: '🚶', text: 'Walk to Quiapo Church (3 mins)' },
      { icon: '🚍', text: 'Take jeepney from Quiapo to Divisoria (₱11)' },
      { icon: '🚶', text: 'Walk to 168 Mall/Tutuban Center (5 mins)' }
    ],
    cost: '₱22',
    time: '~50-60 mins total',
    additionalInfo: 'This route is more economical but takes longer than using the LRT. If you\'re carrying lots of shopping bags on your return journey, you might want to consider a Grab car for comfort.'
  },
  'avoid mrt': {
    title: 'BGC Route Without MRT',
    steps: [
      { icon: '🚌', text: 'Take P2P Bus from your area to BGC (₱45-60)' },
      { icon: '🚶', text: 'Walk to your destination in BGC (5-10 mins)' }
    ],
    cost: '₱45-60',
    time: '~45-70 mins depending on traffic',
    additionalInfo: 'P2P buses are comfortable and have dedicated routes to BGC from various points in Metro Manila including Trinoma, SM North, and Ortigas. They\'re more expensive than jeepneys but more comfortable and direct.'
  },
  'bgc': {
    title: 'Route to BGC',
    steps: [
      { icon: '🚆', text: 'Take MRT to Ayala Station (varies by origin)' },
      { icon: '🚌', text: 'Take BGC Bus from Ayala to your BGC destination (₱13)' },
      { icon: '🚶', text: 'Short walk to final destination (5 mins)' }
    ],
    cost: '₱30-45 depending on origin',
    time: '~30-50 mins total',
    additionalInfo: 'BGC buses run regularly from Ayala MRT and are quite comfortable. During rush hour, expect some waiting time in the queue.'
  },
  'cheapest': {
    title: 'Budget Commuting Tips',
    steps: [
      { icon: '🚍', text: 'Jeepneys are typically the cheapest option (₱11 minimum fare)' },
      { icon: '🚶', text: 'Walking between nearby points saves money' },
      { icon: '⏰', text: 'Travel during off-peak hours when possible' },
      { icon: '💳', text: 'Use Beep card for small discounts on trains' }
    ],
    cost: 'Varies by route',
    time: 'Usually longer than premium options',
    additionalInfo: 'For the absolute cheapest routes, sometimes combining multiple jeepney rides is better than taking the train, but it usually takes significantly longer.'
  }
};

// Function to find matching response based on keywords
export function findMatchingResponse(input: string): RouteResponse {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('cubao') && lowerInput.includes('makati')) {
    return mockResponses['cubao to makati'];
  } else if (lowerInput.includes('divisoria')) {
    return mockResponses['divisoria'];
  } else if (lowerInput.includes('avoid mrt') || (lowerInput.includes('avoid') && lowerInput.includes('mrt'))) {
    return mockResponses['avoid mrt'];
  } else if (lowerInput.includes('bgc') || lowerInput.includes('bonifacio')) {
    return mockResponses['bgc'];
  } else if (lowerInput.includes('cheap') || lowerInput.includes('budget') || lowerInput.includes('cheapest')) {
    return mockResponses['cheapest'];
  }
  
  // Default response if no keywords match
  return {
    title: 'General Commuting Advice',
    steps: [
      { icon: '🚍', text: 'Jeepneys cover most routes in Metro Manila' },
      { icon: '🚆', text: 'MRT/LRT is fastest for long distances during rush hour' },
      { icon: '🚕', text: 'Grab or taxis are convenient but more expensive' }
    ],
    cost: 'Varies by mode',
    time: 'Depends on distance and traffic',
    additionalInfo: 'For more specific advice, please mention your starting point and destination. I can provide better recommendations with these details.'
  };
}

export const suggestedPrompts = [
  "Cheapest route",
  "Avoid MRT",
  "From Cubao to Makati",
  "Jeepney to BGC",
  "Fastest to Divisoria"
];
