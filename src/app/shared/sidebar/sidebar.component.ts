import { Component } from '@angular/core';

// Define valid keys for dropdowns
type DropdownKeys = 'buyRent' | 'propertyType' | 'priceRange' | 'location' | 'bedroom' | 'bathroom';

// Filter group interface
interface FilterGroup {
  key: DropdownKeys;
  label: string;
  options: string[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  // Offcanvas (mobile) toggle state
  isOffcanvasOpen: boolean = false;

  // Dropdown toggle states for each filter group
  dropdowns : Record<DropdownKeys, boolean> = {
    buyRent: false,
    propertyType: false,
    priceRange: false,
    location: false,
    bedroom: false,
    bathroom: false
  };

  // Search input
  searchTerm: string = '';

  // Filter groups with options
  filterGroups: FilterGroup[] = [
    { key: 'buyRent', label: 'Buy / Rent', options: ['Buy', 'Rent'] },
    { key: 'propertyType', label: 'Property Type', options: ['Apartment', 'House', 'Villa', 'Studio'] },
    { key: 'priceRange', label: 'Price Range', options: ['$0 - $ 1,000', '$1,000 - $3,000', '$3,000 - $5,000', '$5,000+'] },
    { key: 'location', label: 'Location', options: ['Kingston', 'Montego Bay', 'Ocho Rios', 'Negril'] },
    { key: 'bedroom', label: 'Bedroom', options: ['1', '2', '3', '4+'] },
    { key: 'bathroom', label: 'Bathroom', options: ['1', '2', '3', '4+'] }
  ];

  // Selected checkboxes for each filter group
  selected: Record<DropdownKeys, Record<string, boolean>> = {
    buyRent: {},
    propertyType: {},
    priceRange: {},
    location: {},
    bedroom: {},
    bathroom: {}
  };

  // Toggle dropdown open/close
  toggleDropdown(name: DropdownKeys) {
    this.dropdowns[name] = !this.dropdowns[name];
  }

  // Toggle offcanvas sidebar for mobile
  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }

  // Close offcanvas when clicking outside
  closeOffcanvas() {
    this.isOffcanvasOpen = false;
  }

  // Called when typing in the search box
  onSearch() {
    console.log('Search term:', this.searchTerm);
    // TODO: connect to API to filter listings
  }

  // Apply filter button
  applyFilters() {
    console.log('Selected filters:', this.selected);
    console.log('Search term:', this.searchTerm);
    // TODO: call API with selected filters and search term

    // Close offcanvas on mobile after applying
    this.closeOffcanvas();
  }

  // Clear all filters and search
  clearFilters() {
    this.searchTerm = '';
    for (const key of Object.keys(this.selected) as DropdownKeys[]) {
      this.selected[key] = {};
    }
    console.log('Filters cleared');
  }
  
}
 