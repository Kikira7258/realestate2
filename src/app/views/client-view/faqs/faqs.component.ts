import { Component, OnInit } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
 faqs: FAQ[] =[];


  // The email address to be copied
 email: string = 'random.email@mail.com'
 
  // Flag to track whether the "Copied!" message should be shown
 copied: boolean = false;

  // Track which FAQ is open
  openIndex: number | null = null; // Index of open FAQ; null means all are closed

  //  Toggle FAQ open/close
  toggleFaq(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
  
 copyEmail() {
  navigator.clipboard.writeText(this.email).then(() => {
    // Set copied to true to show the message
    this.copied = true;

    // Hide the message after 2 seconds
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  })
 }


  
 
 
 ngOnInit(): void {
  this.faqs = [
    {
      question: "What areas do you serve?",
      answer: "We proudly serve a wide range of neighborhood and cities. Whether you're looking for a home in the suburbs, downtown, or surrounding communities, our team is equipped to help you find the perfect property."
    },
    {
      question: "Do you offer virtual tours or video walkthroughs?",
      answer: "Yes! We offer both virtual tours and video walkthrough for many of our listings. These options allow you to explore properties from the comfort of your home and get a detailed view of the layout and features before scheduling an in-person visit."
    },
    {
      question: "How do I schedule a private showing?",
      answer: "Scheduling a private showing is easy, simply contact us through the listing page, call our office directly, or use our online booking form. We'll coordinate with the seller and confirm a time that works for you."
    },
    {
      question: "Are there any fees for buyers?",
      answer: "Typically, buyers do not pay a fee for ours services. In most cases, the sellers covers the real estate agent's commission. We're happy to walk you through any potential costs during your consultation so there are no surprises."
    }
  ];
 }
}
