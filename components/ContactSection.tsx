import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from './icons';

const ContactSection: React.FC = () => {
  const formspreeActionUrl = "https://formspree.io/f/xzzvdgej";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(formspreeActionUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrorMessage(data.errors.map((error: any) => error.message).join(', '));
        } else {
          setErrorMessage("Hi ha hagut un error en enviar el missatge. Si us plau, torna-ho a provar.");
        }
        setSubmissionStatus('error');
      }
    } catch (error) {
      setErrorMessage("Hi ha hagut un problema de xarxa. Si us plau, comprova la teva connexió i torna-ho a provar.");
      setSubmissionStatus('error');
    }
  };

  const renderFormContent = () => {
    if (submissionStatus === 'success') {
      return (
        <div className="text-center p-8 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center" style={{ minHeight: '480px' }}>
          <h3 className="text-2xl font-semibold text-gitec-blue mb-4">Missatge Enviat!</h3>
          <p className="text-gitec-gray mb-6">Gràcies per contactar amb nosaltres. Hem rebut el teu missatge i et respondrem tan aviat com sigui possible.</p>
          <button
            type="button"
            onClick={() => setSubmissionStatus('idle')}
            className="bg-gitec-blue hover:bg-gitec-gray-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Enviar un altre missatge
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gitec-blue">Nom Complet</label>
          <input type="text" name="name" id="name" required
                 value={formData.name} onChange={handleInputChange}
                 className="mt-1 block w-full px-3 py-2 border border-gitec-gray-light rounded-md shadow-sm focus:outline-none focus:ring-gitec-red focus:border-gitec-red sm:text-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gitec-blue">Correu Electrònic</label>
          <input type="email" name="email" id="email" required
                 value={formData.email} onChange={handleInputChange}
                 className="mt-1 block w-full px-3 py-2 border border-gitec-gray-light rounded-md shadow-sm focus:outline-none focus:ring-gitec-red focus:border-gitec-red sm:text-sm" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gitec-blue">Telèfon (Opcional)</label>
          <input type="tel" name="phone" id="phone"
                 value={formData.phone} onChange={handleInputChange}
                 className="mt-1 block w-full px-3 py-2 border border-gitec-gray-light rounded-md shadow-sm focus:outline-none focus:ring-gitec-red focus:border-gitec-red sm:text-sm" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gitec-blue">Assumpte</label>
          <input type="text" name="subject" id="subject" required
                 value={formData.subject} onChange={handleInputChange}
                 className="mt-1 block w-full px-3 py-2 border border-gitec-gray-light rounded-md shadow-sm focus:outline-none focus:ring-gitec-red focus:border-gitec-red sm:text-sm" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gitec-blue">Missatge</label>
          <textarea name="message" id="message" rows={4} required
                    value={formData.message} onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gitec-gray-light rounded-md shadow-sm focus:outline-none focus:ring-gitec-red focus:border-gitec-red sm:text-sm"></textarea>
        </div>
        {submissionStatus === 'error' && (
          <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md">{errorMessage}</p>
        )}
        <div>
          <button type="submit"
                  disabled={submissionStatus === 'submitting'}
                  className="w-full bg-gitec-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gitec-red disabled:bg-gitec-gray-light disabled:cursor-not-allowed">
            {submissionStatus === 'submitting' ? 'Enviant...' : 'Enviar Missatge'}
          </button>
        </div>
      </form>
    );
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gitec-cream scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gitec-blue mb-4">Contacta amb Nosaltres</h2>
          <p className="text-lg text-gitec-gray max-w-2xl mx-auto">Parlem del teu projecte. Explica'ns la teva idea i et farem un pressupost sense compromís.</p>
        </div>

        <div className="lg:flex lg:gap-12">
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <h3 className="text-2xl font-semibold text-gitec-blue mb-6">Informació de Contacte</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <PhoneIcon className="w-7 h-7 text-gitec-red mr-4" />
                <div>
                  <p className="font-semibold text-gitec-blue">Telèfon</p>
                  <a href="tel:678234162" className="text-gitec-gray hover:text-gitec-red">678 234 162</a>
                </div>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-7 h-7 text-gitec-red mr-4" />
                <div>
                  <p className="font-semibold text-gitec-blue">Correu Electrònic</p>
                  <a href="mailto:aleixxortega@gmail.com" className="text-gitec-gray hover:text-gitec-red">aleixxortega@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-7 h-7 text-gitec-red mr-4" />
                <div>
                  <p className="font-semibold text-gitec-blue">Ubicació</p>
                  <p className="text-gitec-gray">C/ Alfons Moré, 2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-xl shadow-xl">
            {renderFormContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
