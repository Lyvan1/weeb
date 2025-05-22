import React from 'react';
import socialIcons from '../../assets/images/socialIcons.png'

const Footer = () => {
    const sections = [
        {
            key: 'product',
            items: ['Product', 'Pricing', 'Overview', 'Browse', 'Accessibility', 'Five']
        },
        {
            key: 'solutions',
            items: ['Solutions', 'Brainstorming', 'Ideation', 'Wireframing', 'Research']
        },
        {
            key: 'resources',
            items: ['Resources', 'Help Center', 'Blog', 'Tutorials']
        },
        {
            key: 'company',
            items: ['Company', 'About', 'Press', 'Events', 'Careers']
        }
    ];

    return (
        <section className={'h-[488px] flex flex-col '}>
          <div className={'flex flex-col sm:flex-row sm:flex-auto text-left gap-[30px] sm:px-[30px] md:justify-between lg:justify-between w-full lg:h-[488px] lg:px-[80px] px-[80px] pt-[80px] text-black bg-white '}>
              <div><span className={'font-bold text-[32px]'}>Weeb</span></div>
              {
                  sections.map((section, index) => (
                      <div key={index} className={'text-left'}>
                          <span className={'text-[16px] uppercase text-[#94A3B8] block mb-3'}> {section.key} </span>
                          {
                              section.items.map((item, index) => (
                                  <ul key={index} >
                                      <li className={'mb-3'}> {item} </li>
                                  </ul>
                              ))
                          }
                      </div>
                  ))
              }
          </div>
            <div className={'flex flex-col gap-10 sm:flex-row md:flex-row lg:flex-row justify-between items-center px-[80px] bg-white text-black h-[120px]'}>
                <div>
                    © 2025 Weeb, Inc. All rightts reserved.
                </div>

                <div>
                    <img src={socialIcons} alt={'icons social media'} />
                </div>
            </div>
        </section>
    );
};

export default Footer;