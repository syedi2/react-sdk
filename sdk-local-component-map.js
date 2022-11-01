// Statically load all "local" components
import AppAnnouncement from './src/components/widgets/AppAnnouncement';
// import AppShell from './src/components/templates/AppShell';
import Attachment from './src/components/Attachment';
import AutoComplete from './src/components/forms/AutoComplete';
import CaseHistory from './src/components/widgets/CaseHistory';
import CaseSummary from './src/components/templates/CaseSummary';
import CaseView from './src/components/templates/CaseView';
import CheckboxComponent from './src/components/forms/Checkbox';
import Currency from './src/components/forms/Currency';
import DataReference from './src/components/templates/DataReference';
import Date from './src/components/forms/Date';
import DateTime from './src/components/forms/DateTime';
import Decimal from './src/components/forms/Decimal';
import DeferLoad from './src/components/DeferLoad';
import Dropdown from './src/components/forms/Dropdown';
// import Email from './src/components/forms/Email';
import ErrorBoundary from './src/components/ErrorBoundary';
import FileUtility from './src/components/widgets/FileUtility';
import FlowContainer from './src/components/FlowContainer';
import Followers from './src/components/widgets/Followers';
import Integer from './src/components/forms/Integer';
// import ModalViewContainer from './src/components/ModalViewContainer';
import Percentage from './src/components/forms/Percentage';
import Phone from './src/components/forms/Phone';
import PromotedFilters from './src/components/templates/PromotedFilters';
import Pulse from './src/components/Pulse';
import RadioButtons from './src/components/forms/RadioButtons';
// import Reference from './src/components/Reference';
// import Region from './src/components/Region';
// import RootContainer from './src/components/RootContainer';
import SemanticLink from './src/components/forms/SemanticLink';
import SimpleTable from './src/components/templates/SimpleTable';
import SimpleTableSelect from './src/components/templates/SimpleTableSelect';
import Stages from './src/components/Stages';
import TextArea from './src/components/forms/TextArea';
import TextContent from './src/components/forms/TextContent';
import TextInput from './src/components/forms/TextInput';
import Time from './src/components/forms/Time';
import ToDo from './src/components/ToDo';
import URLComponent from './src/components/forms/URL';
import UserReference from './src/components/forms/UserReference';
import View from './src/components/View';
import ViewContainer from './src/components/ViewContainer';


// localSdkComponentMap is the JSON object where we'll store the components that are
// found locally. If not found here, we'll look in the Pega-provided component map

// NOTE: A few components have non-standard capitalization:
//  'reference' is what's in the metadata, not Reference
//  'Todo' is what's in the metadata, not ToDo
//  Also, note that "Checkbox" component is name/exported as CheckboxComponent

const localSdkComponentMap = {
      'AppAnnouncement': AppAnnouncement,
      // 'AppShell': AppShell,
      'Attachment': Attachment,
      'AutoComplete': AutoComplete,
      'CaseHistory': CaseHistory,
      'CaseSummary': CaseSummary,
      'CaseView': CaseView,
      'Checkbox': CheckboxComponent,
      'Currency': Currency,
      'DataReference': DataReference,
      'Date': Date,
      'DateTime': DateTime,
      'Decimal': Decimal,
      'DeferLoad': DeferLoad,
      'Dropdown': Dropdown,
      // 'Email': Email,
      'ErrorBoundary': ErrorBoundary,
      'FileUtility': FileUtility,
      'FlowContainer': FlowContainer,
      'Followers': Followers,
      'Integer': Integer,
      // 'ModalViewContainer': ModalViewContainer,
      'Percentage': Percentage,
      // 'Phone': Phone,
      'PromotedFilters': PromotedFilters,
      'Pulse': Pulse,
      'RadioButtons': RadioButtons,
      // 'reference': Reference,
      // 'Region': Region,
      // 'RootContainer': RootContainer,
      'SemanticLink': SemanticLink,
      'SimpleTable': SimpleTable,
      'SimpleTableSelect': SimpleTableSelect,
      'Stages': Stages,
      'TextArea': TextArea,
      'TextContent': TextContent,
      // 'TextInput': TextInput,
      'Time': Time,
      'Todo': ToDo,
      'URLComponent': URLComponent,
      'UserReference': UserReference,
      'View': View,
      'ViewContainer': ViewContainer
    };

export default localSdkComponentMap;
